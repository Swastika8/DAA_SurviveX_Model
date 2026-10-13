# SurviveX — Survival, computed.

A complete, buildless digital twin of the Arduino zombie-city DAA project. All algorithms run locally in plain JavaScript. There are no frameworks, dependencies, CDN scripts, analytics or external assets.

## Assumptions and differences from the supplied brief

- The current physical model uses **7 road LEDs, 4 supply LEDs and 3 buttons sharing A5**. The LCD is unused; the website LCD is virtual.
- A piezo on **D2** and sound-sensor digital output on **D3** are **proposed**, not installed or enabled in the current Arduino firmware. CLAP/Space simulates detection. Archived LCD wiring and proposed additions are separate profiles because their pins conflict.
- Two whole-item Knapsack solutions tie at 370. The board lights **Food + Water + Ammunition**, so the default LCD uses that set instead of the brief's equally optimal Food + Ammunition + Meds example.
- Wire colours and exact power-rail hole numbers were not recorded; the netlist marks them as suggested reference positions. The signal pins, resistor columns, A5 ladder and LED polarity match the recorded wiring.

## Open it

Double-click **index.html**. Classic deferred scripts and relative paths allow the simulation to work directly from disk, offline.

For a localhost preview and optional USB serial, install Node.js and run in PowerShell:

```powershell
Set-Location -LiteralPath 'D:\DAA_Project'
node tools/serve.js
```

Open **http://127.0.0.1:4173/**. If that port is occupied, run `node tools/serve.js 4174` instead. Stop the server with Ctrl+C. `npm start` is equivalent and requires no `npm install`.

## Pages and controls

| Page | What it does |
| --- | --- |
| `#/dashboard` | Detailed SVG foam-city diorama, route animations, algorithm buttons, virtual hardware and computed result |
| `#/algorithms` | Real step traces with Play / Pause / Step / Back / Speed / Reset; adjustable inputs; DP and distance tables; comparison chart |
| `#/breadboard` | Netlist-generated diagram; profile/group filters; pin search; copyable wire list; build guide; live LED animation |
| `#/about` | Project summary, author, complexity, hardware status and repository link |

- **CLAP / Space:** cycles Dijkstra → Knapsack → Zombie TSP. Space retains normal behaviour inside form controls and links.
- **Map:** click a building to choose a Dijkstra destination; zoom controls let you inspect the diorama.
- **What-if:** barricade a road, edit its cost, or add/remove an edge. Edits are browser-only and reset on reload or Reset map.
- **Knapsack:** toggle supply types or adjust capacity. The Supplies route School → Factory → Supplies intentionally lights during packing.
- **LCD:** 32 character slots, each a JS bitmap with 5 × 8 dots. Long lines type and scroll, with a blinking cursor, faint unlit dots, 16-pin labels and adjustable virtual contrast.
- **Sound:** muted by default. Enable sound is an explicit user action; browser Web Audio beeps are optional.
- **Accessibility:** focus indicators, keyboard controls, result/status announcements, reduced-motion support and responsive tables. Hidden tabs stop playback and pause decorative animation.

## The graph

Police Station is the Safe House. School is the start. Every road is undirected; road values are costs, not asserted physical units.

| Road | Cost | Arduino LED pin |
| --- | ---: | --- |
| Zombie Zone ↔ Hospital | 4 | D6 |
| Hospital ↔ Police Station / Safe House | 8 | D7 |
| Police Station ↔ Weapon Shop | 7 | D8 |
| Zombie Zone ↔ Shop | 3 | D9 |
| Shop ↔ School | 5 | D10 |
| School ↔ Factory | 6 | A0 |
| Factory ↔ Supplies | 3 | D13 |

Statue appears as a **decorative landmark only**, never an algorithm node. There is **no Factory–Weapon Shop edge** and **no Supplies–Weapon Shop edge**. The decorative roadblock sits below Weapon House. Store and Weapon House are display aliases of Shop and Weapon Shop.

The visual model follows this arrangement (decoration does not add graph edges):

```text
Zombie Zone        Hospital          Safe House
        Store      Statue            Weapon House
                                     Roadblock
School             Factory           Supplies
                                     Food / Water / Ammunition / Meds
```

### Expected results

- **Dijkstra:** School → Shop → Zombie Zone → Hospital → Safe House, cost **20**. Supplies route: School → Factory → Supplies, cost **9**. From School: Shop 5, Zombie Zone 8, Hospital 12, Safe House 20, Weapon Shop 27, Factory 6, Supplies 9.
- **0/1 Knapsack:** capacity **18 kg**, optimal profit **370**, weight **18 kg**. Tied sets: Food + Water + Ammunition; Food + Meds + Ammunition. The installed board chooses the first. Ratio-greedy whole items returns **320**; fractional packing returns **425** with 70% of Ammunition. Whole items are appropriate when you cannot carry half a crate.
- **Held–Karp TSP:** minimum cost **72** using shortest-path distances. The default physical graph is a tree, so the closed walk crosses each road twice: **14 traversals**. The metric stop order has **64 tied optimal permutations**. This is a closed road walk, not a Hamiltonian cycle on the original road graph.

| Supply | Weight (kg) | Profit | Arduino LED pin |
| --- | ---: | ---: | --- |
| Food | 5 | 120 | A1 |
| Water | 3 | 100 | A2 |
| Ammunition | 10 | 150 | A3 |
| Meds | 3 | 100 | A4 |

## Algorithms and traces

- `dijkstra.js`: array-based minimum scan; **O(V²)**. Returns distance/frontier/visited snapshots, predecessor reconstruction and road walk steps. Zero-cost edges are allowed; negative weights are rejected.
- `knapsack.js`: **O(nW)** dynamic programming over whole items. Returns the actual cell-fill trace and backtracking decisions. Skip-on-tie produces the installed board's choice; optimal-branch enumeration exposes both tied sets. Brute force checks all subsets.
- `tsp.js`: Floyd–Warshall builds the shortest-path metric and next-hop matrix. Held–Karp uses subset masks and endpoint states: **O(n² 2ⁿ)** time. Reconstructed metric legs expand onto actual roads. Brute force checks all **5,040** permutations of the seven non-start locations.

At the defaults the counters report 1,358 Held–Karp candidate evaluations and 40,320 brute-force edge additions. They count different primitive operations; they are **not timing benchmarks**. The SVG chart shows theoretical growth on a log₁₀ scale, with n meaning total locations. Shared all-pairs preprocessing and rendering are excluded from those counters. DP's practical advantage here is scaling.

The browser exposes `SurviveXData`, `SXAlgorithms`, `SXApp`, `SXMap`, `SXHardware` and `SXBreadboard` for explaining the code in a viva. Runtime scripts are classic IIFEs, not ES modules.

## Optional Arduino USB connection

The standalone simulation needs no Arduino. To connect your installed CH340 Uno:

1. Serve the project on localhost, or use an HTTPS deployment in Chrome/Edge.
2. Connect the Arduino. Close Arduino Serial Monitor and any other program using its COM port.
3. Click **Connect Arduino** and select the USB serial device yourself.
4. The port opens at **9600 baud** and may reset the Uno. Wait for its ready message.
5. Physical `Button=1`, `Button=2`, `Button=3` serial lines trigger the matching website mode. Default website mission clicks can send `D`, `K`, `T` commands to the board.
6. Click **Disconnect Arduino** before opening another serial tool.

Serial monitor entries labelled **UNO** are actual received text. **SIM** entries are calculated browser results. The virtual LEDs mirror the computed animation and **do not measure electrical output**, so a dark or disconnected physical LED cannot be diagnosed from the webpage alone.

Edited graph/destination/capacity/item scenarios stay in the browser and do not send incompatible commands to the fixed board program. A physical button restores the board's default inputs before showing its mode. The existing firmware's `Button=N` and D/K/T protocol is supported without changing its wiring. Live USB behaviour still needs verification with your connected device; the algorithm and UI checks do not substitute for that hardware check.

[Chrome's Web Serial documentation](https://developer.chrome.com/docs/capabilities/serial) describes the required user selection and secure-context requirements. USB access is optional and browser-dependent.

## Wiring reference

`js/data.js` contains the single netlist, component pins, breadboard holes, suggested colours and hardware profiles. The diagram and table both use it; no independent list of wires exists.

- A–E rows share a numbered column; F–J share that same **top** column number on the other half, separated by the centre gap.
- Each LED has a 220Ω resistor. A is the long positive leg; K is the short negative leg. LED extension wires are M2F, with the male side at the breadboard.
- A5's three-button divider uses three 220Ω resistors. Idle ≈1023; Dijkstra ≈0; Knapsack ≈512; TSP ≈682. Use diagonal button contacts A and D.
- Diagram profiles prevent the archived LCD and proposed D2/D3 additions from sharing those Arduino signals at the same time.
- Validation checks every wire endpoint has a diagram anchor and prevents two wire ends or resistor legs occupying the same hole within a profile.
- Always disconnect USB before changing the physical wiring. Remove the temporary potentiometer probe from G40 if it is still present.

## Tests

```powershell
node tests/run.js
# or
npm test
```

Tests verify expected distances/routes, blocked routes, legal weights, both Knapsack ties, comparison results, DP versus brute force across capacities, disabled items, TSP metric reconstruction, all 5,040 permutations, and netlist consistency. No test dependencies are installed.

The runtime JS stays under the brief's approximate 150 KB limit. SVG art and system fonts avoid downloads. Lighthouse 95+ is a **target**, not a claimed audited score.

## File structure

```text
DAA_Project/
├── index.html
├── .nojekyll
├── .gitignore
├── .gitattributes
├── package.json
├── README.md
├── SOURCE_FILES.md          full file tree + complete source blocks
├── netlify.toml
├── vercel.json
├── assets/
│   └── favicon.svg
├── css/
│   └── styles.css
├── js/
│   ├── data.js
│   ├── utils.js
│   ├── map.js
│   ├── hardware.js
│   ├── breadboard.js
│   ├── app.js
│   └── algorithms/
│       ├── dijkstra.js
│       ├── knapsack.js
│       └── tsp.js
├── tests/
│   └── run.js
└── tools/
    ├── serve.js
    └── source-bundle.js
```

## GitHub push

The target repository is [Swastika8/DAA_SurviveX_Model](https://github.com/Swastika8/DAA_SurviveX_Model).

For this prepared Git checkout:

```powershell
Set-Location -LiteralPath 'D:\DAA_Project'
git status
git add .
git commit -m "Build SurviveX digital twin website"
git branch -M main
git push -u origin main
```

For a fresh folder that has never been a checkout, initialize it first:

```powershell
git init -b main
git remote add origin https://github.com/Swastika8/DAA_SurviveX_Model.git
```

Then use the add/commit/push commands above. If Git requests authentication, use Git Credential Manager's normal browser sign-in. If the remote already contains commits, clone it first and copy these source files into that checkout; integrate its history rather than force-pushing over it. Later updates do not need `git init` or another `remote add`.

## GitHub Pages

1. Push the project files to **main**, with `index.html` at the repository root.
2. Open repository **Settings → Pages**.
3. Under Build and deployment, choose **Deploy from a branch**.
4. Select **main** and **/ (root)**, then Save.
5. Once GitHub finishes deployment, open `https://swastika8.github.io/DAA_SurviveX_Model/`.

Hash routing avoids server-side route rewrites, and relative URLs work under the repository subpath. `.nojekyll` disables Jekyll processing. See [GitHub's publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Vercel or Netlify

- **Vercel:** import the GitHub repository; select **Other** as the framework, leave the build command empty and use the repository root (`.`) as output. `vercel.json` provides that static configuration. See [Vercel builds](https://vercel.com/docs/builds).
- **Netlify:** import the repository with **no build command** and publish directory **`.`**, or use Netlify's manual folder deployment. `netlify.toml` sets the publish directory. See [Netlify project deployment](https://docs.netlify.com/manage/projects/add-new-project/).

No API keys, backend, database or environment variables are required. Deployment settings still need to be enabled on the chosen hosting service; pushing code alone does not prove a live deployment.

## Credits

**Swastika Sinha · TY IT A · PCCoE Pune · Savitribai Phule Pune University · DAA**

Team members and faculty guide are editable placeholders on About. No PRN is included on the public site.
