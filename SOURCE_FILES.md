# SurviveX — complete source files

All source is saved as real files. This companion lists the tree first, then one complete code block for each file.

```text
DAA_Project/
  .gitattributes
  .gitignore
  .nojekyll
  assets/favicon.svg
  css/styles.css
  index.html
  js/algorithms/dijkstra.js
  js/algorithms/knapsack.js
  js/algorithms/tsp.js
  js/app.js
  js/breadboard.js
  js/data.js
  js/hardware.js
  js/map.js
  js/utils.js
  netlify.toml
  package.json
  README.md
  tests/run.js
  tools/serve.js
  tools/source-bundle.js
  vercel.json
  SOURCE_FILES.md
```

## .gitattributes

```text
* text=auto eol=lf
```

## .gitignore

```text
node_modules/
.DS_Store
Thumbs.db
*.log
*.zip
.vercel/
.netlify/
```

## .nojekyll

```text

```

## assets/favicon.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#101410"/><path d="M44 16H24L16 28l25 9-5 11H15" fill="none" stroke="#b8ee71" stroke-width="7"/><path d="m44 40 12 14m0-14L44 54" stroke="#ed6b70" stroke-width="4"/></svg>
```

## css/styles.css

```css
@charset "UTF-8";
:root{color-scheme:dark;--bg:#101410;--panel:#181e17;--line:#343d2d;--text:#edf0e5;--muted:#a2ad97;--green:#b6e779;--red:#e87873;--amber:#e7bd73;--mono:Consolas,"Courier New",monospace;--radius:12px}
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:95px}body{font-family:Inter,"Segoe UI",Arial,sans-serif;background:var(--bg);color:var(--text);line-height:1.5}body:before{content:"";position:fixed;inset:0;z-index:-1;background:radial-gradient(ellipse at 18% 6%,#38492a28,transparent 55%);pointer-events:none}a{text-decoration:none}button,select,input{font:inherit}button{cursor:pointer}button:disabled{opacity:.38;cursor:default}a,button,input,select,summary{outline-offset:5px}a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,summary:focus-visible,[tabindex]:focus-visible{outline:2px solid var(--green)}h1,h2,h3,p{margin-top:0}h1{font-size:clamp(2.1rem,3.3vw,3.5rem);line-height:1.03;letter-spacing:-.055em;font-weight:750;margin-bottom:18px}h2{font-size:1.55rem;letter-spacing:-.025em;line-height:1.22;margin-bottom:16px}h3{font-size:1.05rem;line-height:1.4}p{color:var(--muted);font-size:.95rem}small{font-size:.7rem}.toxic{color:var(--green)}.muted{color:var(--muted);font-size:.85rem}.eyebrow{font:600 .65rem var(--mono);letter-spacing:.12em;color:var(--green);display:inline-block}.topbar{height:93px;display:flex;align-items:center;justify-content:space-between;gap:26px;padding:0 3%;border-bottom:1px solid var(--line);background:#101610ef}.brand{display:flex;align-items:center;gap:12px;font-size:1.35rem;font-weight:800;letter-spacing:.05em}.brand-symbol{font-size:1.9rem;border:1px solid #586641;border-radius:7px;padding:0 10px;position:relative;line-height:1.6;color:var(--green)}.brand-symbol>span{position:absolute;font-size:1.3rem;color:var(--red);right:0;bottom:-3px}.brand small{display:block;font:500 .55rem var(--mono);letter-spacing:.15em;color:#a2ad97;margin-top:1px}.topbar nav{display:flex;gap:30px;height:100%;align-items:center}.topbar nav a{color:#a6b29a;font-size:.85rem;position:relative;padding:34px 0}.topbar nav a.active{color:var(--green)}.topbar nav a.active:after{content:"";height:2px;position:absolute;left:0;right:0;bottom:19px;background:var(--green)}.button{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:1px solid #48523b;color:#e0e7d4;background:#21291e;border-radius:6px;min-height:40px;padding:8px 14px;font-size:.8rem;font-weight:600;transition:background .18s,border-color .18s}.button:hover:not(:disabled){background:#303b27;border-color:#73885a}.button.primary,.button.active{background:var(--green);border-color:var(--green);color:#152011}.button.quiet{background:transparent;font-size:.75rem}.button.tiny{min-height:30px;font-size:.7rem;padding:5px 10px}.status-dot,.signal-dot{display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--green);box-shadow:0 0 9px #b6e77980;flex-shrink:0}.status-dot{background:#8a9781;box-shadow:none}.connected .status-dot{background:var(--green);box-shadow:0 0 7px var(--green)}.system-strip{height:34px;padding:0 3%;display:flex;align-items:center;gap:27px;background:#1e2919;border-bottom:1px solid #3b4a2b;font:500 .58rem var(--mono);letter-spacing:.09em;color:#b8c2a9}.system-strip span:first-child{color:var(--green)}.system-strip i{margin-right:7px}.strip-end{margin-left:auto}main{padding:30px 3% 50px;max-width:1900px;margin:auto;min-height:75vh}#footer{display:flex;justify-content:space-between;gap:24px;padding:23px 3%;border-top:1px solid var(--line);font:500 .6rem var(--mono);letter-spacing:.045em;color:#89967e}#toast{position:fixed;bottom:25px;left:50%;transform:translateX(-50%) translateY(100px);opacity:0;z-index:80;background:#24321d;border:1px solid #789652;padding:14px 21px;max-width:min(90vw,580px);color:#edf5de;border-radius:8px;box-shadow:0 12px 60px #0008;font-size:.85rem;transition:transform .25s,opacity .25s;pointer-events:none}#toast.show{transform:translateX(-50%) translateY(0);opacity:1}.dashboard-grid{display:grid;grid-template-columns:230px minmax(350px,1fr) 340px;gap:26px;align-items:start}.mission-sidebar{padding:21px 0;position:sticky;top:20px}.sidebar-title{font-size:1.42rem;line-height:1.2;color:#e4ead8;font-weight:650;letter-spacing:-.03em;margin:15px 0 25px}.mode-list{display:grid;gap:10px}.mode-button{display:flex;align-items:center;text-align:left;gap:12px;color:#bdc8b1;border:1px solid var(--line);background:#1c2319;padding:15px 12px;border-radius:8px;position:relative;min-height:79px;transition:background .2s,transform .2s}.mode-button:hover{transform:translateX(3px);border-color:#728456}.mode-button.active{background:#314225;color:#deedc7;border-color:#96bd65}.mode-button.active:before{content:"";position:absolute;left:-1px;top:18px;bottom:18px;width:3px;background:var(--green)}.mode-icon{font-size:1.7rem;color:#a6ba8d;line-height:1}.mode-button strong{display:block;font-size:.86rem}.mode-button small{display:block;font-size:.65rem;color:#acb99c;margin-top:3px}.mode-button em{margin-left:auto;font:500 .58rem var(--mono);color:#95aa7d;align-self:flex-start}.sidebar-link{display:flex;align-items:center;justify-content:space-between;font-size:.74rem;color:#a5b395;padding:16px 1px;border-bottom:1px solid #303929}.sidebar-link:hover{color:var(--green)}.sidebar-note{padding:20px 0 12px}.sidebar-note strong{margin-left:8px;font-size:.76rem}.sidebar-note p{font-size:.72rem;margin-top:9px;line-height:1.65}.clap-button{width:100%;background:#293320;border:1px solid #778c52;border-radius:8px;color:#c5dbad;padding:16px 10px;text-align:center;position:relative;overflow:hidden}.clap-button:hover{background:#37472a}.clap-button>span{display:block;font-size:1.65rem;color:var(--amber)}.clap-button strong{display:block;font:700 .74rem var(--mono);letter-spacing:.04em;margin:5px 0}.clap-button small{font:500 .48rem var(--mono);letter-spacing:.03em;color:#a8b596}.sidebar-foot{font-size:.64rem;line-height:1.7;margin-top:13px;color:#91a07f}.city-column{min-width:0}.mission-heading{display:flex;align-items:center;justify-content:space-between;padding:17px 0 10px}.mission-heading h1{font-size:clamp(2.3rem,3.5vw,4rem);margin-top:12px;margin-bottom:14px}.mission-heading h1 span{color:var(--green)}.sector-badge{font:500 3.9rem var(--mono);color:#61774a;line-height:1;text-align:center;margin-right:5px}.sector-badge small{display:block;font-size:.54rem;letter-spacing:.13em;color:#98a984;margin-top:10px}.map-panel{border:1px solid #48533b;border-radius:10px;overflow:hidden;background:#1a241b;box-shadow:0 15px 40px #0003}.map-topline,.map-bottomline{display:flex;justify-content:space-between;gap:12px;font:500 .57rem var(--mono);letter-spacing:.045em;color:#adbca1;padding:13px 16px;background:#20291d;border-bottom:1px solid #3c4932}.map-topline .signal-dot{margin-right:7px}.map-topline #active-algorithm{color:var(--green)}.map-bottomline{border-top:1px solid #3c4932;border-bottom:0;font-size:.48rem}.legend-line{display:inline-block;width:14px;height:3px;background:var(--green);vertical-align:middle;margin-right:3px}.legend-line.blocked{background:var(--red)}.city-svg{display:block;width:100%;height:auto;overflow:visible}.map-node{cursor:pointer}.map-node:hover{filter:brightness(1.17)}.map-node:focus{outline:none;filter:drop-shadow(0 0 5px #bded83)}.map-node.visited>rect:last-of-type{stroke:#b6e779}.map-node.frontier>rect:last-of-type{stroke:#e7bd73}.map-road .road-fill,.map-road .road-dashes{transition:stroke .25s,filter .25s}.map-road.active .road-fill{stroke:#426b32;filter:drop-shadow(0 0 5px #89d85466)}.map-road.active .road-dashes{stroke:#d1f4a3}.map-road.active .cost-badge{stroke:#add97b;fill:#345523}.map-road.scouted.active .road-fill{stroke:#7b3f3c;filter:drop-shadow(0 0 5px #d9635966)}.map-road.scouted.active .road-dashes{stroke:#ffc0a5}.map-road.blocked .road-fill{stroke:#70332f}.map-road.blocked .road-dashes{stroke:#f18b79;stroke-dasharray:4 9;stroke-width:5}.map-actor{transition:transform .58s ease;pointer-events:none;filter:drop-shadow(0 2px 3px #000)}.scout-sprite{display:none}.zombie-mode .scout-sprite{display:block}.zombie-mode .human-sprite{display:none}.ambient-zombie{animation:zombie-sway 4s ease-in-out infinite;transform-box:fill-box;transform-origin:center}.ambient-zombie:nth-of-type(2n){animation-delay:-2s}.fog{animation:fog-drift 14s ease-in-out infinite alternate}.chimney-smoke{animation:smoke 6s infinite}.mission-control{display:flex;align-items:end;gap:10px;margin-top:16px;flex-wrap:wrap}.mission-control label{font-size:.64rem;color:#abbba0}.mission-control label[hidden]{display:none}.mission-control select{display:block;margin-top:5px;min-width:155px}.text-link{font-size:.72rem;color:var(--green);margin-left:auto;margin-bottom:9px}.mission-message{padding:20px 0 14px;border-bottom:1px solid var(--line);min-height:83px}.mission-message p{font-size:.82rem;margin:6px 0 0;color:#ccd7bd}.city-facts{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:18px 0}.city-facts>div{border-right:1px solid var(--line)}.city-facts>div:last-child{border:0}.city-facts strong{display:block;color:#dbe6cc;font:500 1.8rem var(--mono);line-height:1.2}.city-facts strong small{font-size:.9rem;margin-left:4px}.city-facts span{font:500 .51rem var(--mono);color:#9aab89;letter-spacing:.02em}.telemetry-column{min-width:0;padding-top:16px}.panel-heading{display:flex;justify-content:space-between;align-items:center;margin-bottom:13px}.mini-status{font:500 .5rem var(--mono);color:#b3c69b;border:1px solid #4c6240;border-radius:3px;padding:3px 5px}.device-frame{border:1px solid #485b3b;border-radius:10px;background:linear-gradient(130deg,#293421,#1a2117);padding:15px 12px 9px;box-shadow:inset 0 0 30px #0002}.device-brand{font:600 .62rem var(--mono);letter-spacing:.12em;color:#bdcea8;margin:1px 4px 10px}.device-brand span{float:right;font-size:.49rem;color:#a4b393}.lcd-svg{width:100%;display:block;filter:drop-shadow(0 2px 5px #0006)}.lcd-backlight{filter:drop-shadow(0 0 5px #bad26065)}.lcd-cursor{animation:cursor-blink 1s steps(1) infinite}.contrast-control{display:flex;align-items:center;gap:8px;font:500 .48rem var(--mono);color:#a9ba93;padding:3px 3px 14px}.contrast-control input{width:85px;height:4px;accent-color:#bad779;min-height:14px}.contrast-control span{margin-left:auto;font-size:.43rem;color:#95a885}.device-leds{padding:8px 5px;border-top:1px solid #425137}.device-leds .eyebrow{font-size:.49rem;letter-spacing:.08em;color:#a5b892}.led-bank{display:grid;gap:5px;padding:12px 0 15px}.road-bank{grid-template-columns:repeat(7,minmax(0,1fr))}.supply-bank{grid-template-columns:repeat(4,minmax(0,1fr))}.output-led{text-align:center;display:block;min-width:0}.output-led i{display:block;margin:auto auto 7px;width:12px;height:12px;border-radius:50%;background:#35432c;border:1px solid #68794f;box-shadow:inset 1px 1px 3px #849a5350;transition:background .2s,box-shadow .2s}.output-led.on i{background:#c6fa83;border-color:#e2ffb7;box-shadow:0 0 13px #baff7780,inset 1px 1px 2px #fff}.output-led b{display:block;font:500 .56rem var(--mono);color:#b9c9a9}.output-led small{display:block;font:400 .39rem var(--mono);color:#94a482;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:4px}.device-status{display:flex;align-items:center;justify-content:space-between;border-top:1px solid #425137;padding:10px 3px 9px;font:500 .46rem var(--mono);color:#a9bb96}.device-status b{font-size:.4rem;margin-left:3px;color:#8b9d7c}.device-status label{display:flex;gap:4px;align-items:center}.device-status input{width:12px;height:12px;accent-color:var(--green)}.buzzer-dot{display:inline-block;width:5px;height:5px;border-radius:50%;background:#867c45;margin-right:4px}.decor-leds{display:flex;justify-content:center;gap:9px;padding:9px 0 3px}.decor-leds i{display:block;width:5px;height:5px;border-radius:50%;opacity:.2}.decor-0{background:#e78075}.decor-1{background:#dcb75c}.decor-2{background:#b6e779}.touring .decor-leds i{animation:led-chase 1.4s infinite;animation-delay:var(--delay)}.serial-panel{border:1px solid var(--line);border-radius:7px;margin-top:14px;overflow:hidden;background:#11190f}.serial-panel summary{display:flex;justify-content:space-between;padding:10px 12px;cursor:pointer;font:500 .6rem var(--mono);color:#b6c8a1;background:#1d2819}.serial-panel summary span:last-child{color:#94a380;font-size:.5rem}.serial-panel pre{height:102px;overflow:auto;white-space:pre-wrap;overflow-wrap:anywhere;font:400 .56rem/1.7 var(--mono);color:#adbb9e;margin:0;padding:10px 12px}.serial-actions{display:flex;gap:7px;justify-content:flex-end;padding:0 10px 9px}.serial-actions .button{font-size:.5rem;min-height:24px}.result-card{padding:18px 17px;border:1px solid #536841;border-radius:10px;margin-top:16px;background:#232f1c}.result-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.result-top .eyebrow{font-size:.51rem;letter-spacing:.05em}.tag{display:inline-block;border:1px solid #66854c;padding:4px 7px;color:#cce4b1;border-radius:4px;font:500 .5rem var(--mono);letter-spacing:.05em;white-space:nowrap}.tag.danger{border-color:#9b514b;color:#efb1aa}.result-metric{display:flex;align-items:center;gap:14px;padding:12px 0 7px}.result-metric strong{font:500 3.35rem/1 var(--mono);color:#d2efaa;letter-spacing:-.07em}.result-metric span{font:500 .54rem/1.8 var(--mono);color:#9eb789;max-width:80px}.result-path{font-size:.78rem;color:#e0e9d5;margin-bottom:9px;line-height:1.65}.result-card .muted{font-size:.61rem;margin-bottom:14px}.result-footer{display:flex;justify-content:space-between;gap:8px;border-top:1px solid #4a5e38;padding-top:11px;font:500 .54rem var(--mono);color:#b9caa7}.hardware-footnote{font-size:.62rem;line-height:1.65;margin:12px 2px;color:#95a686}.page-heading{display:flex;justify-content:space-between;align-items:center;gap:25px;margin:18px 0 29px}.page-heading h1{margin:12px 0 15px}.page-heading p{max-width:720px;margin-bottom:0}.panel{background:var(--panel);border:1px solid var(--line);border-radius:var(--radius);padding:25px;margin-bottom:22px;min-width:0}.section-heading{display:flex;align-items:center;justify-content:space-between;gap:18px}.section-heading h2{margin:9px 0 12px}.complexity{font:500 .9rem var(--mono);color:var(--green);padding:7px 10px;border:1px solid #465737;border-radius:6px;white-space:nowrap}select,input[type=number],input[type=search],input[readonly]{min-height:39px;border:1px solid #526141;background:#20291b;border-radius:5px;color:var(--text);padding:7px 11px;font-size:.82rem;max-width:100%}input:invalid{border-color:#a76d50}label{color:#b4c0a6;font-size:.75rem}input[type=checkbox],input[type=range]{accent-color:var(--green)}summary{cursor:pointer;color:#cad9b8;font-size:.88rem}.lab-grid{display:grid;grid-template-columns:minmax(360px,1fr) 330px;gap:25px;align-items:start;max-width:1200px;margin:0 auto 30px}.lab-map{padding:0;overflow:hidden}.lab-map p{padding:14px 20px;margin:0;border-top:1px solid var(--line)}.lab-telemetry .result-card{margin-bottom:0}.lab-jump{display:flex;gap:25px;padding:18px 0 30px;font:500 .75rem var(--mono);color:var(--green);flex-wrap:wrap}.algorithm-section{scroll-margin-top:20px}.input-row{display:flex;gap:18px;margin:22px 0}.input-row label{display:grid;gap:7px}.playback{display:flex;gap:8px;align-items:center;flex-wrap:wrap;padding:16px 0}.playback label{margin-left:auto;font-size:.7rem}.playback select{min-height:36px;font-size:.7rem;margin-left:5px}.play-count{font:500 .69rem var(--mono);color:#a7bc92;min-width:72px;text-align:right}.button.running{box-shadow:0 0 0 3px #b6e77922}.trace-message{padding:14px 16px;border-left:3px solid var(--green);background:#25321d;color:#d1e0be;min-height:53px;font:.84rem/1.6 var(--mono);margin:8px 0 22px}.table-scroll{overflow:auto;border:1px solid #3b4931;border-radius:7px;max-width:100%;position:relative}table{border-collapse:collapse;width:100%;font-size:.78rem;color:#c2d0b3}th,td{text-align:left;padding:11px 13px;border-bottom:1px solid #34422b;border-right:1px solid #34422b}th{color:#bfd49f;background:#26341f;font-weight:600}thead{position:sticky;top:0;z-index:2}tr:last-child td,tr:last-child th{border-bottom:0}td:last-child,th:last-child{border-right:0}td small{display:block;color:#91a47e;margin-top:4px}.current-cell{background:#445d2d;color:#ecffc9;outline:1px solid #abd66f;outline-offset:-1px}.take-cell{background:#63552a;color:#ffe7a3;outline-color:#d4b45d}.dijkstra-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px}.frontier-box{padding:18px 22px;border:1px solid #3c4c2f;border-radius:8px;background:#1e281a}.frontier-box p{margin:9px 0 27px;font-size:.88rem;color:#c7d7b5}.scenario-editor{margin-top:25px;border-top:1px solid var(--line);padding-top:18px}.scenario-editor>p{margin-top:18px}.road-edit{display:grid;grid-template-columns:105px 1fr 110px 75px;gap:10px;align-items:center;padding:10px 0;border-bottom:1px solid #34422b;font-size:.8rem}.road-edit input[type=number]{width:65px;min-height:32px;padding:5px}.road-edit label{font-size:.69rem}.weight-label{display:flex;gap:7px;align-items:center}.scenario-editor form{display:flex;align-items:end;gap:14px;flex-wrap:wrap;margin:20px 0}.scenario-editor form label{display:grid;gap:7px}.scenario-editor form input{width:120px}.items-row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;padding:15px 0}.item-choice{display:flex;gap:10px;align-items:center;background:#222e1b;border:1px solid #435535;border-radius:8px;padding:16px 12px;cursor:pointer}.item-choice:has(input:not(:checked)){opacity:.6}.item-icon{font-size:1.5rem;color:var(--amber)}.item-choice strong,.item-choice small{display:block}.item-choice strong{font-size:.82rem}.item-choice small{font-size:.65rem;color:#a7bb91;margin-top:3px}.capacity-control{display:flex;align-items:center;gap:15px;margin:17px 0;font-size:.83rem}.capacity-control input{width:240px}.capacity-control output{color:var(--green);font-family:var(--mono);min-width:55px}.dp-scroll{max-height:310px}.dp-table th,.dp-table td{min-width:39px;text-align:center;padding:10px 7px;font:500 .7rem var(--mono)}.dp-table th:first-child{position:sticky;left:0;min-width:128px;z-index:1}.dp-table thead th:first-child{z-index:4}.backpack{display:flex;align-items:center;gap:25px;margin-top:23px;padding:20px;background:#222e1c;border:1px solid #425735;border-radius:8px;min-height:122px}.backpack-icon{font-size:3.6rem;color:#9cbd72}.backpack .eyebrow{font-size:.58rem}.packed-item{display:inline-block;padding:6px 10px;border:1px solid #718d4c;border-radius:5px;background:#3b5029;color:#e0efc7;font-size:.75rem;margin:10px 7px 3px 0;animation:item-drop .3s ease-out}.backpack p{margin:8px 0 0}.comparison-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin:15px 0 20px}.compare-card{padding:23px;border:1px solid #485238;border-radius:9px;background:#20261b}.compare-card.best{border-color:#8dbb5d;background:#2b3b22}.compare-card .eyebrow{color:#b5c49f;font-size:.55rem}.compare-card h3{margin:13px 0 17px}.compare-card strong{font:500 3rem var(--mono);color:#d4e9b6}.compare-card p{font-size:.8rem;min-height:45px;margin:10px 0 15px}.compare-card small{color:#b4c699;font:500 .68rem var(--mono)}.tsp-scroll{max-height:340px}.tsp-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin:25px 0}.tsp-stats>div{border-left:2px solid #617b48;padding-left:18px}.tsp-stats strong{font:500 2.3rem var(--mono);display:block;margin-top:8px;color:#d8ecc0}.tsp-stats small{display:block;color:#a5b792;line-height:1.6}.scaling-svg{width:100%;max-height:310px;display:block;background:#121a10;border:1px solid var(--line);border-radius:8px;margin-bottom:16px}.notice{padding:15px 18px;border:1px solid #71653b;background:#302c1b;border-radius:8px;font-size:.82rem;color:#d4c79f;margin-bottom:23px}.board-toolbar{display:flex;align-items:end;gap:25px;flex-wrap:wrap;margin:20px 0}.board-toolbar label{display:grid;gap:7px;min-width:250px}.filter-tabs{display:flex;gap:6px;flex-wrap:wrap}.filter-tabs .button{text-transform:capitalize}.board-shell{border:1px solid #45543a;border-radius:9px;background:#131b12;overflow:hidden}.board-scroll{overflow:auto}.breadboard-svg{width:100%;min-width:1020px;display:block}.breadboard-svg text{font-family:var(--mono)}.wire-tooltip{font:.75rem/1.8 var(--mono);color:#c0d3aa;margin:0;padding:17px 20px;background:#22301b;border-top:1px solid #405333;min-height:66px}.net-wire{opacity:.52;cursor:pointer;transition:opacity .15s,stroke-width .15s}.net-wire:hover,.net-wire:focus,.wire-focus.net-wire{opacity:1;stroke-width:5;outline:none;filter:drop-shadow(0 0 5px #b9e77b55)}.wire-dim{opacity:.14}.filtered-out{display:none}.diagram-led.on{fill:#d0fb85;filter:drop-shadow(0 0 12px #b6e779)}.validation{font:.68rem var(--mono);color:#b5d18f;padding:17px 4px}.board-bottom{display:grid;grid-template-columns:minmax(300px,.7fr) minmax(480px,1fr);gap:24px}.step-controls{display:flex;justify-content:space-between;align-items:center;padding:18px 0}.step-controls strong{font:500 .78rem var(--mono);color:#b5c69d}.build-stepper ol{padding-left:24px;font:.75rem/1.8 var(--mono);color:#b4c5a1}.build-stepper li{padding:5px 0}.wire-list .table-scroll{max-height:490px}.wire-list table{font-size:.68rem}.wire-list td{padding:10px}.wire-list tr:hover{background:#304123}.search-label{display:grid;gap:7px;margin:12px 0 17px}.about-grid{display:grid;grid-template-columns:340px minmax(0,1fr);gap:26px;max-width:1250px;margin:auto}.author-panel{align-self:start;padding:34px;position:sticky;top:30px}.author-mark{width:115px;height:115px;border:1px solid #6f8b4e;border-radius:17px;background:#314623;font:500 3.2rem/115px var(--mono);text-align:center;color:#c4e9a3;position:relative;margin:25px 0 32px}.author-mark span{position:absolute;right:-3px;bottom:-25px;color:var(--red);font-size:3rem}.author-panel h2{font-size:1.65rem}.author-panel p{font-size:.83rem;line-height:1.7}.author-credits{border-top:1px solid #435035;padding-top:22px;margin-top:27px}.author-credits span{font:500 .56rem var(--mono);color:#aac290;letter-spacing:.13em}.author-credits p{margin-top:7px;color:#a1ad94}.about-algorithms{display:grid;gap:12px;margin:25px 0}.about-algorithms>div{display:flex;align-items:center;gap:16px;padding:13px 16px;border:1px solid #465538;border-radius:7px}.about-algorithms span{color:var(--green);font-size:1.6rem}.about-algorithms strong{font-size:.85rem}.about-algorithms code{margin-left:auto;color:var(--green);font-size:.75rem}.panel ul{color:#b6c5a4;font-size:.86rem;line-height:1.8;padding-left:23px}.panel li{padding:4px 0}.skip:focus{color:#162010;background:var(--green);padding:9px 14px;border-radius:5px}.boot{color:var(--green)}
.board-live-controls{display:flex;align-items:center;gap:15px;flex-wrap:wrap;width:100%;padding-top:5px}.board-live-controls label{display:flex;align-items:center;gap:8px}.tab-hidden *,.tab-hidden *:before,.tab-hidden *:after{animation-play-state:paused!important}.brand:hover .brand-symbol{animation:logo-glitch .35s steps(2)}.lcd-mount{position:relative}.lcd-mount:after{content:"";position:absolute;inset:18% 7% 41%;background:repeating-linear-gradient(transparent 0 3px,#19270a09 3px 4px);pointer-events:none}.device-frame{position:relative}.contrast-control:before{content:"";width:20px;height:20px;border-radius:50%;border:2px solid #7c8d68;background:radial-gradient(circle,#526247 40%,#242e1d 44%);box-shadow:inset 0 2px 4px #0005}.brand-symbol{transition:filter .2s}.brand:hover .brand-symbol{filter:drop-shadow(2px 0 0 #e8787355)}
/* A miniature craft city inside a crisp, restrained mission console. */
body{background:#10181b;background-image:radial-gradient(ellipse at 42% 20%,#35523a24,transparent 55%),radial-gradient(ellipse at 90% 15%,#28697816,transparent 35%)}.topbar{background:#111b1ded}.system-strip{background:#243124}.mission-heading h1{color:#faf4e4;text-shadow:0 3px 35px #0002}.mission-heading h1 span{background:linear-gradient(110deg,#d5ed9b,#a9d985);-webkit-background-clip:text;background-clip:text;color:transparent}.map-panel{border-color:#5b7260;box-shadow:0 20px 55px #06131450,0 0 0 4px #ffffff03}.map-topline,.map-bottomline{background:#1c3030;color:#c1d2ba;border-color:#465f55}.map-topline{font-size:.64rem}.map-bottomline{font-size:.54rem}.map-road.active .road-fill{stroke:#648d43;filter:drop-shadow(0 0 7px #bfef7e66)}.map-road.active .road-dashes{stroke:#f3f8c1;animation:road-flow 1.5s linear infinite}.map-road.scouted.active .road-fill{stroke:#9d5450}.map-road.active .cost-badge{fill:#386039;stroke:#e1efab}.map-node{transition:translate .2s,filter .2s}.map-node:hover{translate:0 -3px;filter:drop-shadow(0 6px 7px #0e191880) brightness(1.08)}.map-node.visited .node-label{stroke:#c5e898;fill:#254538}.map-node.frontier .node-label{stroke:#edc583;fill:#454637}#city-map{position:relative;overflow:hidden}.map-view-controls{position:absolute;bottom:17px;right:17px;display:flex;gap:5px;align-items:center}.map-view-controls span{font:.5rem var(--mono);letter-spacing:.06em;color:#b8ccad;margin-right:5px}.map-view-controls button{display:grid;place-items:center;width:29px;height:27px;border:1px solid #77927a;border-radius:5px;background:#173032e8;color:#e4ead2;font:.7rem var(--mono)}.map-view-controls button:hover{background:#43623e}.building-window{filter:drop-shadow(0 0 2px #f5d98340)}.mode-button[data-mode=dijkstra] .mode-icon{color:#c6e996}.mode-button[data-mode=knapsack] .mode-icon{color:#edc788}.mode-button[data-mode=tsp] .mode-icon{color:#ed9c92}.mode-button[data-mode=knapsack].active{background:#473923;border-color:#c4a26a}.mode-button[data-mode=tsp].active{background:#432e30;border-color:#bc7974}.mode-button[data-mode=knapsack].active:before{background:#edc788}.mode-button[data-mode=tsp].active:before{background:#ed9c92}.sidebar-link{color:#b2c4b0}.clap-button{background:linear-gradient(115deg,#384933,#243f3c);border-color:#72977b}.clap-button:hover{background:linear-gradient(115deg,#4c623e,#31564e)}.device-frame{background:linear-gradient(135deg,#34452c,#1d312e);border-color:#698361;box-shadow:inset 0 0 24px #0b191833,0 12px 35px #07120d30}.device-brand{color:#e2e7cc}.device-leds .eyebrow{color:#bed0ab}.output-led small{color:#b4c7a8;font-size:.46rem}.output-led b{font-size:.63rem}.panel-heading .eyebrow{font-size:.7rem}.mini-status{font-size:.56rem}.result-card{background:linear-gradient(135deg,#2b4228,#203b32);border-color:#779659}.result-top .eyebrow{font-size:.59rem}.result-path{font-size:.86rem;color:#e6eeda}.result-footer{font-size:.61rem}.result-card .muted{font-size:.69rem}.result-metric strong{font-size:3.6rem}.result-metric span{font-size:.6rem}.device-status{font-size:.53rem}.device-status b{font-size:.44rem}.serial-panel summary{font-size:.66rem}.serial-panel pre{font-size:.63rem;color:#b8cba8}.hardware-footnote{font-size:.68rem}.mission-message{background:linear-gradient(90deg,#253c282e,transparent);border-left:2px solid #90b76c;padding-left:15px;margin-top:15px;border-radius:0 8px 8px 0}.mission-message p{font-size:.87rem}.city-facts strong{color:#e9edcf}.city-facts span{font-size:.59rem;color:#b6c5a3}.sector-badge{color:#8ca67b}.sidebar-title{color:#f3efdf}.mode-button strong{font-size:.92rem}.mode-button small{font-size:.68rem}.panel{background:linear-gradient(135deg,#1b2822,#19231f);border-color:#3d5242}.page-heading h1{color:#f3efdc}.eyebrow{color:#c0de97}.text-link{color:#c5e0a4}.notice{background:#393325;color:#efddb4}.telemetry-column{transition:opacity .2s}.author-panel{background:linear-gradient(140deg,#2a4431,#1a2d2c)}body[data-mode=knapsack] .result-card{background:linear-gradient(135deg,#493b26,#313a26);border-color:#b29461}body[data-mode=knapsack] .result-metric strong{color:#f2d696}body[data-mode=tsp] .result-card{background:linear-gradient(135deg,#492e32,#2b3834);border-color:#b97b73}body[data-mode=tsp] .result-metric strong{color:#f0afa0}body[data-mode=tsp] .result-top .eyebrow{color:#f0b6a9}body[data-mode=knapsack] .result-top .eyebrow{color:#ecd3a3}.page-heading{animation:page-reveal .35s ease-out}.lab-map .map-view-controls{bottom:20px}.lab-map #city-map{background:#253b32}.contrast-control input{accent-color:#d1de86}
@keyframes road-flow{to{stroke-dashoffset:-42}}@keyframes page-reveal{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
.contrast-knob{width:25px;height:25px;float:left;margin:0 7px 7px 3px;border:2px solid #829678;border-radius:50%;background:radial-gradient(circle,#65765a 40%,#2b3c2c 44%);position:relative;padding:0;box-shadow:inset 0 2px 4px #0005}.contrast-knob i{position:absolute;top:2px;left:10px;width:2px;height:8px;background:#e5edc6;transform-origin:1px 10px;transform:rotate(var(--angle))}.contrast-knob:hover{border-color:#c8e49e}.contrast-control:before{display:none}
@keyframes logo-glitch{25%{transform:translateX(-2px);text-shadow:2px 0 #e87873}75%{transform:translateX(2px);text-shadow:-2px 0 #79baca}}@keyframes cursor-blink{50%{opacity:0}}@keyframes led-chase{0%,35%,100%{opacity:.17;box-shadow:none}12%{opacity:1;box-shadow:0 0 9px currentColor}}@keyframes zombie-sway{50%{rotate:3deg;translate:2px 0}}@keyframes fog-drift{to{translate:55px 12px;opacity:.09}}@keyframes smoke{50%{opacity:.12;translate:4px -8px}}@keyframes item-drop{from{opacity:0;transform:translateY(-13px)}to{opacity:1;transform:translateY(0)}}
@media(min-width:1600px){.dashboard-grid{grid-template-columns:250px minmax(550px,1fr) 390px;gap:35px}.mode-button{min-height:88px}.sidebar-title{font-size:1.65rem}.device-brand{font-size:.72rem}.eyebrow{font-size:.7rem}.result-path{font-size:.88rem}.city-facts strong{font-size:2.4rem}.city-facts span{font-size:.6rem}}
@media(max-width:1200px){.dashboard-grid{grid-template-columns:190px minmax(300px,1fr) 290px;gap:18px}.topbar nav{gap:20px}.mode-button{gap:8px;padding:14px 9px}.mode-icon{font-size:1.35rem}.mode-button small{font-size:.58rem}.mission-heading h1{font-size:2.7rem}.result-top{gap:3px}.result-top .eyebrow{font-size:.43rem}.device-status{font-size:.41rem}.topbar{padding:0 2%}main{padding-left:2%;padding-right:2%}.items-row{gap:8px}.item-choice{padding:13px 8px;gap:7px}.board-bottom{grid-template-columns:1fr 1.3fr}}
@media(max-width:980px){.dashboard-grid{grid-template-columns:190px minmax(0,1fr)}.telemetry-column{grid-column:1/-1;display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start}.telemetry-column .hardware-footnote{grid-column:2;margin-top:-15px}.hardware-panel{grid-row:span 2}.telemetry-column .result-card{margin-top:0}.topbar{height:auto;min-height:87px;flex-wrap:wrap;padding:15px 3%;gap:15px}.topbar nav{order:3;width:100%;justify-content:center;border-top:1px solid var(--line);padding-top:13px;gap:35px}.topbar nav a{padding:0 0 8px;font-size:.8rem}.topbar nav a.active:after{bottom:0}.lab-grid{grid-template-columns:1fr 300px;gap:18px}.items-row{grid-template-columns:repeat(2,1fr)}.board-bottom{grid-template-columns:1fr}.about-grid{grid-template-columns:280px 1fr}.author-panel{padding:24px}.system-strip{font-size:.5rem}.strip-end{display:none}.road-edit{grid-template-columns:95px 1fr 105px 65px}.page-heading h1{font-size:2.6rem}}
@media(max-width:720px){main{padding:20px 4% 35px}.topbar{padding:15px 4%}.brand{font-size:1.17rem}.brand-symbol{font-size:1.7rem}.button.quiet{font-size:.65rem;padding:7px 9px;min-height:35px}.topbar nav{gap:24px;justify-content:space-between}.topbar nav a{font-size:.72rem}.system-strip{padding:0 4%;gap:15px;font-size:.46rem}.dashboard-grid{display:flex;flex-direction:column;gap:7px}.mission-sidebar{position:static;padding:3px 0 10px;width:100%}.mission-sidebar>.eyebrow,.sidebar-title,.sidebar-note,.sidebar-foot{display:none}.mode-list{grid-template-columns:repeat(3,1fr);gap:7px}.mode-button{min-height:68px;flex-direction:column;align-items:flex-start;gap:5px;padding:9px 10px}.mode-button strong{font-size:.73rem}.mode-button small{display:none}.mode-button em{position:absolute;right:8px;top:10px;font-size:.46rem}.mode-icon{font-size:1.35rem}.sidebar-link{display:inline-flex;width:49%;border:0;font-size:.61rem;padding:11px 0}.sidebar-link span{margin-left:9px}.clap-button{display:flex;align-items:center;justify-content:center;gap:10px;padding:7px 10px;margin-top:0;min-height:39px}.clap-button>span{font-size:1.35rem}.clap-button strong{font-size:.62rem;margin:0}.clap-button small{font-size:.43rem}.city-column{width:100%}.mission-heading{padding-top:19px}.mission-heading h1{font-size:3rem}.sector-badge{font-size:3.1rem}.sector-badge small{font-size:.48rem}.map-topline{font-size:.48rem;padding:10px}.map-bottomline{font-size:.42rem;padding:11px 9px;gap:6px}.mission-control{gap:8px}.mission-control .button{font-size:.7rem;padding:7px 11px}.mission-control select{font-size:.75rem;min-width:140px}.text-link{font-size:.65rem}.city-facts{padding:17px 0 23px}.city-facts span{font-size:.47rem}.telemetry-column{display:block;width:100%;padding-top:10px}.hardware-panel{max-width:460px;margin:0 auto}.telemetry-column .result-card{margin-top:20px}.telemetry-column .hardware-footnote{margin-top:13px}.device-brand{font-size:.78rem}.device-status{font-size:.58rem}.device-status b{font-size:.47rem}.device-status input{width:16px;height:16px}.contrast-control{font-size:.6rem}.contrast-control span{font-size:.51rem}.device-leds .eyebrow{font-size:.62rem}.output-led b{font-size:.7rem}.output-led small{font-size:.5rem}.output-led i{width:15px;height:15px}.serial-panel pre{font-size:.67rem;height:120px}.serial-panel summary{font-size:.7rem}.serial-panel summary span:last-child{font-size:.6rem}.serial-actions .button{font-size:.63rem;min-height:29px}.result-path{font-size:.85rem}.result-card .muted{font-size:.75rem}.result-footer{font-size:.68rem}.result-top .eyebrow{font-size:.6rem}.tag{font-size:.57rem}.page-heading{display:block;margin:12px 0 25px}.page-heading .button,.page-heading>.tag{margin-top:15px}.page-heading h1{font-size:2.65rem}.page-heading p{font-size:.85rem}.panel{padding:20px 17px}.lab-grid{display:flex;flex-direction:column;gap:8px}.lab-map{padding:0;width:100%;margin-bottom:20px}.lab-telemetry{width:100%;max-width:470px;margin:auto}.lab-jump{gap:13px;font-size:.67rem;justify-content:space-between;padding:22px 0}.section-heading{align-items:flex-start}.section-heading h2{font-size:1.3rem}.complexity{font-size:.67rem;padding:5px 7px;margin-top:4px}.panel>p{font-size:.84rem}.input-row{gap:12px}.input-row label{min-width:0;flex:1}.playback{gap:6px}.playback .button{font-size:.65rem;padding:6px 9px;min-height:35px}.playback label{margin-left:0;font-size:.65rem}.playback select{min-height:33px}.play-count{margin-left:auto;font-size:.62rem}.trace-message{font-size:.71rem;padding:11px 12px}.dijkstra-grid{grid-template-columns:1fr;gap:15px}.frontier-box{padding:14px}.frontier-box p{margin-bottom:17px}.road-edit{grid-template-columns:90px 1fr 70px;gap:7px;font-size:.68rem;padding:12px 0}.road-edit>span{grid-column:2/4}.road-edit .weight-label{grid-column:2}.road-edit button{grid-column:3}.scenario-editor form{gap:9px}.scenario-editor form label{flex:1;min-width:100px}.items-row{gap:8px}.item-choice{padding:13px 9px;gap:7px}.item-choice strong{font-size:.74rem}.item-choice small{font-size:.58rem}.item-icon{font-size:1.2rem}.capacity-control{gap:10px;flex-wrap:wrap;font-size:.72rem}.capacity-control input{width:130px;flex:1}.backpack{padding:14px;gap:15px;min-height:110px}.backpack-icon{font-size:2.7rem}.backpack .eyebrow{font-size:.49rem}.comparison-grid{grid-template-columns:1fr;gap:12px}.compare-card{padding:20px}.compare-card p{min-height:0}.compare-card strong{font-size:2.5rem}.tsp-stats{grid-template-columns:1fr;gap:19px}.tsp-stats>div{display:grid;grid-template-columns:1fr auto;align-items:center}.tsp-stats strong{font-size:1.8rem;grid-row:span 2;margin:0}.tsp-stats small{grid-column:1;grid-row:2}.tsp-stats .eyebrow{font-size:.6rem}.notice{font-size:.73rem}.board-toolbar{gap:13px}.board-toolbar label{min-width:0;width:100%}.wire-tooltip{font-size:.65rem;min-height:79px;padding:13px}.validation{font-size:.6rem;line-height:1.7}.board-bottom{display:block}.wire-list .section-heading h2{font-size:1.3rem}.wire-list th,.wire-list td{font-size:.61rem;padding:9px 7px}.about-grid{grid-template-columns:1fr;gap:0}.author-panel{position:static}.author-mark{width:90px;height:90px;font-size:2.6rem;line-height:90px;margin:19px 0 25px}.author-credits{display:grid;grid-template-columns:1fr 1fr;gap:5px 20px}.author-credits p{grid-row:2}.author-credits span:nth-of-type(2){grid-column:2;grid-row:1}.about-algorithms>div{padding:12px;gap:10px}.about-algorithms strong{font-size:.77rem}.about-algorithms code{font-size:.65rem}#footer{flex-direction:column;gap:9px;padding:23px 4%;font-size:.56rem}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*:before,*:after{animation:none!important;transition:none!important}.map-actor{transition:none}.lcd-cursor{opacity:1}}
@media print{.topbar,.system-strip,#footer,.mission-sidebar,.playback,#toast,.serial-panel{display:none}body{background:white;color:black}main{padding:0}.panel,.result-card{break-inside:avoid;color:black;background:white;border:1px solid #555}.dashboard-grid{display:block}.telemetry-column{display:none}}
```

## index.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#111612">
  <meta name="description" content="SurviveX: an interactive zombie-city digital twin demonstrating Dijkstra, 0/1 Knapsack and Held–Karp TSP with Arduino LEDs.">
  <title>SurviveX — Survival, computed.</title>
  <style>html{background:#101410;color:#e9eee6;font-family:system-ui,sans-serif}body{margin:0}button,input,select{font:inherit}a{color:inherit}.boot{padding:4rem;text-align:center}.skip{position:absolute;left:-10000px}.skip:focus{left:1rem;top:1rem;z-index:100}</style>
  <link rel="stylesheet" href="css/styles.css">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <script defer src="js/data.js"></script>
  <script defer src="js/algorithms/dijkstra.js"></script>
  <script defer src="js/algorithms/knapsack.js"></script>
  <script defer src="js/algorithms/tsp.js"></script>
  <script defer src="js/utils.js"></script>
  <script defer src="js/map.js"></script>
  <script defer src="js/hardware.js"></script>
  <script defer src="js/breadboard.js"></script>
  <script defer src="js/app.js"></script>
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>
  <header class="topbar">
    <a class="brand" href="#/dashboard" aria-label="SurviveX dashboard"><span class="brand-symbol">S<span>×</span></span><span>SURVIVE<span class="toxic">X</span><small>SURVIVAL, COMPUTED.</small></span></a>
    <nav aria-label="Main navigation"><a href="#/dashboard">Dashboard</a><a href="#/algorithms">Algorithms</a><a href="#/breadboard">Connections</a><a href="#/about">About</a></nav>
    <button id="usb-connect" class="button quiet"><span class="status-dot"></span><span>Connect Arduino</span></button>
  </header>
  <div class="system-strip"><span><i class="signal-dot"></i> SYSTEM ONLINE</span><span id="connection-status">BROWSER SIMULATION</span><span class="strip-end">8 LOCATIONS / 7 ROADS / 3 ALGORITHMS</span></div>
  <main id="main" tabindex="-1"><div class="boot">Preparing the city…</div></main>
  <footer id="footer"></footer>
  <div id="toast" role="status" aria-live="polite"></div>
  <noscript><p class="boot">Please enable JavaScript to run the interactive algorithms.</p></noscript>
</body>
</html>
```

## js/algorithms/dijkstra.js

```javascript
(function (root) {
  'use strict';
  const api = root.SXAlgorithms = root.SXAlgorithms || {};
  function dijkstra(nodes,roads,source,target,blocked) {
    const ids=nodes.map(n=>typeof n==='string'?n:n.id), excluded=new Set(blocked||[]);
    if (!ids.includes(source)||!ids.includes(target)) throw new Error('Unknown source or destination.');
    const edges=roads.filter(r=>!excluded.has(r.id));
    edges.forEach(r=>{if(!ids.includes(r.from)||!ids.includes(r.to)||!Number.isFinite(r.weight)||r.weight<0)throw new Error('Road weights must be finite and non-negative.');});
    const distance={},previous={},visited=new Set(),trace=[];
    ids.forEach(id=>{distance[id]=Infinity;previous[id]=null;});distance[source]=0;
    let operations=0;
    function snapshot(kind,message,extra) {
      trace.push(Object.assign({kind,message,distances:Object.assign({},distance),visited:Array.from(visited),frontier:ids.filter(id=>!visited.has(id)&&Number.isFinite(distance[id])).sort((a,b)=>distance[a]-distance[b])},extra||{}));
    }
    snapshot('init','Start at '+source+'; all other distances are ∞.',{node:source});
    for(let iteration=0;iteration<ids.length;iteration++) {
      let u=null;
      ids.forEach(id=>{operations++;if(!visited.has(id)&&(u===null||distance[id]<distance[u]))u=id;});
      if(u===null||!Number.isFinite(distance[u]))break;
      snapshot('select','Choose the nearest unvisited node: '+u+'.',{node:u});
      visited.add(u);
      edges.forEach(r=>{
        const v=r.from===u?r.to:r.to===u?r.from:null;
        if(v===null||visited.has(v))return;
        operations++;const candidate=distance[u]+r.weight,improved=candidate<distance[v];
        if(improved){distance[v]=candidate;previous[v]=u;}
        snapshot('relax',improved?'Improve '+v+' to '+candidate+'.':'Keep the shorter known distance to '+v+'.',{node:v,edge:r.id,improved});
      });
      snapshot('settle','Settle '+u+'.',{node:u});
    }
    const path=[],pathRoads=[];
    if(Number.isFinite(distance[target])) {
      let current=target;const seen=new Set();
      while(current!==null){if(seen.has(current))throw new Error('Invalid predecessor cycle.');seen.add(current);path.unshift(current);current=previous[current];}
      for(let i=1;i<path.length;i++) {
        const edge=edges.find(r=>(r.from===path[i-1]&&r.to===path[i])||(r.to===path[i-1]&&r.from===path[i]));
        pathRoads.push(edge.id);snapshot('path','Walk '+path[i-1]+' → '+path[i]+'.',{edge:edge.id,node:path[i],path:path.slice(0,i+1),activeRoads:pathRoads.slice()});
      }
    }
    snapshot('done',path.length?'Destination reached. Total cost '+distance[target]+'.':'NO ROUTE: destination is disconnected.',{path:path.slice(),activeRoads:pathRoads.slice()});
    return {algorithm:'dijkstra',source,target,path,pathRoads,cost:distance[target],distances:distance,previous,trace,operations,noRoute:!path.length,complexity:'O(V²)'};
  }
  api.dijkstra=dijkstra;
  if(typeof module!=='undefined'&&module.exports)module.exports=dijkstra;
})(typeof globalThis!=='undefined'?globalThis:window);
```

## js/algorithms/knapsack.js

```javascript
(function(root){
  'use strict';const api=root.SXAlgorithms=root.SXAlgorithms||{};
  function knapsack(items,capacity){
    if(!Number.isInteger(capacity)||capacity<0||capacity>100)throw new Error('Capacity must be an integer between 0 and 100.');
    items.forEach(i=>{if(!Number.isInteger(i.weight)||i.weight<=0||!Number.isFinite(i.profit)||i.profit<0)throw new Error('Invalid item weight or profit.');});
    const n=items.length,table=Array.from({length:n+1},()=>Array(capacity+1).fill(0)),trace=[];
    for(let w=0;w<=capacity;w++)trace.push({kind:'cell',row:0,col:w,value:0,decision:'base',message:'No items: profit 0 at capacity '+w+'.'});
    let operations=0;
    for(let i=1;i<=n;i++)for(let w=0;w<=capacity;w++){
      operations++;const item=items[i-1],skip=table[i-1][w],take=item.weight<=w?table[i-1][w-item.weight]+item.profit:-Infinity;
      table[i][w]=Math.max(skip,take);
      trace.push({kind:'cell',row:i,col:w,value:table[i][w],decision:take>skip?'take':'skip',item:item.id,skip,take,message:item.name+' at capacity '+w+': '+(take>skip?'take':'skip')+', profit '+table[i][w]+'.'});
    }
    const chosen=[];let w=capacity;
    for(let i=n;i>0;i--){
      const take=table[i][w]>table[i-1][w];
      trace.push({kind:'backtrack',row:i,col:w,item:items[i-1].id,take,message:(take?'Pack ':'Skip ')+items[i-1].name+'.'});
      if(take){chosen.unshift(items[i-1]);w-=items[i-1].weight;}
    }
    // Enumerate only optimal branches in the DP table to expose tied solutions.
    const tiedSets=[];
    function ties(i,remaining,set){
      if(i===0){tiedSets.push(set.slice().reverse());return;}
      if(table[i][remaining]===table[i-1][remaining])ties(i-1,remaining,set);
      const item=items[i-1];
      if(item.weight<=remaining&&table[i][remaining]===table[i-1][remaining-item.weight]+item.profit)ties(i-1,remaining-item.weight,set.concat(item.id));
    }
    ties(n,capacity,[]);
    const totalWeight=chosen.reduce((s,i)=>s+i.weight,0),profit=table[n][capacity];
    trace.push({kind:'done',chosen:chosen.map(i=>i.id),profit,weight:totalWeight,message:'Packed '+chosen.length+' items, profit '+profit+', weight '+totalWeight+'.'});
    return {algorithm:'knapsack',chosen,profit,weight:totalWeight,capacity,table,trace,tiedSets,operations,complexity:'O(nW)'};
  }
  function greedy(items,capacity,fractional){
    const sorted=items.map((item,index)=>({item,index})).sort((a,b)=>b.item.profit/b.item.weight-a.item.profit/a.item.weight||a.index-b.index);
    let remaining=capacity,profit=0,weight=0;const chosen=[];
    sorted.forEach(({item})=>{
      const fraction=fractional?Math.min(1,remaining/item.weight):(item.weight<=remaining?1:0);
      if(fraction>0){chosen.push({item,fraction});remaining-=item.weight*fraction;weight+=item.weight*fraction;profit+=item.profit*fraction;}
    });
    return {profit,weight,chosen};
  }
  function bruteKnapsack(items,capacity){
    let best=0,sets=[];
    for(let mask=0;mask<(1<<items.length);mask++){
      let weight=0,profit=0;const chosen=[];
      items.forEach((i,index)=>{if(mask&(1<<index)){weight+=i.weight;profit+=i.profit;chosen.push(i.id);}});
      if(weight<=capacity&&profit>=best){if(profit>best)sets=[];best=profit;sets.push(chosen);}
    }
    return {profit:best,sets};
  }
  Object.assign(api,{knapsack,greedy,bruteKnapsack});
  if(typeof module!=='undefined'&&module.exports)module.exports={knapsack,greedy,bruteKnapsack};
})(typeof globalThis!=='undefined'?globalThis:window);
```

## js/algorithms/tsp.js

```javascript
(function(root){
  'use strict';const api=root.SXAlgorithms=root.SXAlgorithms||{};
  function metric(nodes,roads,blocked){
    const ids=nodes.map(n=>typeof n==='string'?n:n.id),blockedSet=new Set(blocked||[]),n=ids.length;
    const distance=Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>i===j?0:Infinity));
    const next=Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>i===j?i:null));
    roads.filter(r=>!blockedSet.has(r.id)).forEach(r=>{
      const a=ids.indexOf(r.from),b=ids.indexOf(r.to);
      if(a<0||b<0||r.weight<0||!Number.isFinite(r.weight))throw new Error('Invalid graph edge.');
      if(r.weight<distance[a][b]){distance[a][b]=distance[b][a]=r.weight;next[a][b]=b;next[b][a]=a;}
    });
    for(let k=0;k<n;k++)for(let i=0;i<n;i++)for(let j=0;j<n;j++)if(distance[i][k]+distance[k][j]<distance[i][j]){distance[i][j]=distance[i][k]+distance[k][j];next[i][j]=next[i][k];}
    function path(from,to){let a=ids.indexOf(from),b=ids.indexOf(to);if(next[a][b]===null)return [];const out=[from];for(let hops=0;a!==b&&hops<n;hops++){a=next[a][b];out.push(ids[a]);}return out;}
    return {ids,distance,path};
  }
  function tsp(nodes,roads,start,blocked){
    const m=metric(nodes,roads,blocked),s=m.ids.indexOf(start),others=m.ids.filter(id=>id!==start),n=others.length;
    if(s<0)throw new Error('Unknown TSP start.');
    if(m.distance[s].some(d=>!Number.isFinite(d)))return {algorithm:'tsp',noRoute:true,cost:Infinity,tour:[],walk:[],pathRoads:[],trace:[{kind:'done',message:'NO TOUR: the map is disconnected.'}],states:[],operations:0,complexity:'O(n² · 2ⁿ)'};
    const dp=new Map(),parent=new Map(),trace=[],states=[];let operations=0;
    const key=(mask,end)=>mask+':'+end;
    for(let mask=1;mask<(1<<n);mask++)for(let end=0;end<n;end++){
      if(!(mask&(1<<end)))continue;
      const rest=mask^(1<<end);let cost=Infinity,before=null;
      if(rest===0){cost=m.distance[s][m.ids.indexOf(others[end])];operations++;}
      else for(let prev=0;prev<n;prev++)if(rest&(1<<prev)){
        operations++;const candidate=dp.get(key(rest,prev))+m.distance[m.ids.indexOf(others[prev])][m.ids.indexOf(others[end])];
        if(candidate<cost){cost=candidate;before=prev;}
      }
      dp.set(key(mask,end),cost);parent.set(key(mask,end),before);
      const state={mask,end:others[end],subset:others.filter((_,i)=>mask&(1<<i)),cost,previous:before===null?start:others[before]};states.push(state);
      trace.push(Object.assign({kind:'dp',message:'Visit {'+state.subset.join(', ')+'}, end at '+state.end+': '+cost+'.'},state));
    }
    const full=(1<<n)-1;let best=Infinity,last=null;
    for(let end=0;end<n;end++){operations++;const cost=dp.get(key(full,end))+m.distance[m.ids.indexOf(others[end])][s];if(cost<best){best=cost;last=end;}}
    let mask=full;const ordered=[];
    while(last!==null){ordered.unshift(others[last]);const before=parent.get(key(mask,last));mask^=1<<last;last=before;}
    const tour=[start].concat(ordered,start),walk=[start],pathRoads=[];
    for(let leg=1;leg<tour.length;leg++){
      const segment=m.path(tour[leg-1],tour[leg]);
      for(let j=1;j<segment.length;j++){
        const from=segment[j-1],to=segment[j],road=roads.find(r=>(r.from===from&&r.to===to)||(r.from===to&&r.to===from));
        walk.push(to);pathRoads.push(road.id);
        trace.push({kind:'walk',node:to,from,edge:road.id,walk:walk.slice(),activeRoads:[road.id],message:'Scout '+from+' → '+to+'.'});
      }
    }
    trace.push({kind:'done',tour:tour.slice(),walk:walk.slice(),cost:best,message:'Return to School. Minimum closed-walk cost '+best+'.'});
    return {algorithm:'tsp',cost:best,tour,walk,pathRoads,trace,states,others,operations,metric:m,complexity:'O(n² · 2ⁿ)',noRoute:false};
  }
  function bruteTSP(nodes,roads,start,blocked){
    const m=metric(nodes,roads,blocked),s=m.ids.indexOf(start),others=m.ids.filter(id=>id!==start);let cost=Infinity,best=[],ties=0,permutations=0,operations=0;
    function visit(order,remaining){
      if(!remaining.length){permutations++;const tour=[start].concat(order,start);let total=0;for(let i=1;i<tour.length;i++){operations++;total+=m.distance[m.ids.indexOf(tour[i-1])][m.ids.indexOf(tour[i])];}if(total<cost){cost=total;best=tour;ties=1;}else if(total===cost&&Number.isFinite(total))ties++;return;}
      remaining.forEach((id,i)=>visit(order.concat(id),remaining.filter((_,j)=>j!==i)));
    }
    visit([],others);return {cost,tour:best,ties,permutations,operations};
  }
  Object.assign(api,{metric,tsp,bruteTSP});if(typeof module!=='undefined'&&module.exports)module.exports={metric,tsp,bruteTSP};
})(typeof globalThis!=='undefined'?globalThis:window);
```

## js/app.js

```javascript
(function(root){
  'use strict';const D=root.SurviveXData,V=root.SXView,A=root.SXAlgorithms,H=root.SXHardware,M=root.SXMap,B=root.SXBreadboard;
  const app={route:'dashboard',mode:'dijkstra',target:D.safeHouse,capacity:D.capacity,items:new Set(D.items.map(i=>i.id)),roads:D.roads.map(r=>Object.assign({},r)),blocked:new Set(),players:{},result:null,serial:null,reader:null,writer:null,serialTask:null,buffer:'',dashboardTimer:null,live:{mode:'dijkstra',activeRoads:[],supplies:[],node:D.source},speed:650};
  const main=document.querySelector('#main');
  function pathNames(ids){return(ids||[]).map(V.name).join(' → ');}
  function pathCodes(ids){return(ids||[]).map(V.code).join(' > ');}
  function choices(){return D.nodes.map(n=>'<option value="'+n.id+'"'+(app.target===n.id?' selected':'')+'>'+V.escape(n.alias||n.name)+'</option>').join('');}
  function selectedItems(){return D.items.filter(i=>app.items.has(i.id));}
  function solve(mode){if(mode==='dijkstra')return A.dijkstra(D.nodes,app.roads,D.source,app.target,Array.from(app.blocked));if(mode==='knapsack')return A.knapsack(selectedItems(),app.capacity);const r=A.tsp(D.nodes,app.roads,D.source,Array.from(app.blocked));r.brute=A.bruteTSP(D.nodes,app.roads,D.source,Array.from(app.blocked));return r;}
  function resultMarkup(r){
    const fail=r.noRoute,kind=D.modes.find(m=>m.id===r.algorithm),metric=r.algorithm==='knapsack'?r.profit:V.number(r.cost),label=r.algorithm==='knapsack'?'SURVIVAL PROFIT':'TOTAL ROAD COST';
    let body=r.algorithm==='knapsack'?r.chosen.map(i=>i.name).join(' + ')||'Empty backpack':r.algorithm==='tsp'?pathNames(r.walk):pathNames(r.path);
    if(fail)body=r.algorithm==='tsp'?'A disconnected map cannot be fully scouted.':'The barricades disconnect this destination.';
    const secondary=r.algorithm==='knapsack'?r.weight+' / '+r.capacity+' kg · '+r.chosen.length+' item types':r.algorithm==='tsp'?(r.walk.length-1)+' physical road traversals':Math.max(0,r.path.length-1)+' roads · start at School';
    return '<div class="result-top"><span class="eyebrow">'+kind.name.toUpperCase()+' / RESULT</span><span class="tag '+(fail?'danger':'')+'">'+(fail?'NO ROUTE':'COMPUTED')+'</span></div><div class="result-metric"><strong>'+(fail?'—':metric)+'</strong><span>'+label+'</span></div><p class="result-path">'+V.escape(body)+'</p><p class="muted">'+secondary+'</p><div class="result-footer"><span>'+r.complexity+'</span><span>'+r.operations.toLocaleString()+' counted operations</span></div>';
  }
  function writeResult(r){
    if(r.noRoute){H.setText(r.algorithm==='tsp'?'TSP: NO TOUR':'NO ROUTE','MAP DISCONNECTED');H.write('NO ROUTE / '+D.modes.find(m=>m.id===r.algorithm).name);return;}
    if(r.algorithm==='dijkstra'){H.setText('PATH:'+r.path.map(V.code).join('-'),'COST:'+r.cost);H.write('Dijkstra cost='+r.cost+' path='+pathCodes(r.path));}
    else if(r.algorithm==='knapsack'){H.setText('TAKE:'+r.chosen.map(i=>i.short||i.name).join(' '),'PROFIT:'+r.profit+' W:'+r.weight);H.write('0/1 Knapsack profit='+r.profit+' weight='+r.weight+' chosen='+r.chosen.map(i=>i.name).join(','));}
    else{H.setText('TOUR:'+r.walk.map(V.code).join('-'),'COST:'+r.cost);H.write('Held–Karp cost='+r.cost+' traversals='+(r.walk.length-1));}H.beep();
  }
  function sync(state){app.live=Object.assign({mode:app.mode,blocked:Array.from(app.blocked),activeRoads:[],supplies:[],node:D.source},state);document.body.dataset.mode=app.live.mode;M.update(app.live);H.update(app.live);B.update(app.live);}
  function finalState(r){return{mode:r.algorithm,node:r.algorithm==='dijkstra'?(r.path.at(-1)||D.source):r.algorithm==='knapsack'?D.supplies:D.source,activeRoads:r.noRoute?[]:r.algorithm==='knapsack'?supplyRoute().pathRoads:Array.from(new Set(r.pathRoads)),supplies:r.algorithm==='knapsack'?r.chosen.map(i=>i.id):[],visited:r.algorithm==='dijkstra'?D.nodes.filter(n=>Number.isFinite(r.distances[n.id])).map(n=>n.id):[]};}
  function supplyRoute(){return A.dijkstra(D.nodes,app.roads,D.source,D.supplies,Array.from(app.blocked));}
  function dashboardTrace(r){
    if(r.algorithm==='knapsack'){const route=supplyRoute(),out=route.trace.filter(t=>t.kind==='path').map(t=>Object.assign({},t,{supplies:[]}));r.chosen.forEach((item,i)=>out.push({kind:'pack',node:route.noRoute?D.source:D.supplies,activeRoads:route.pathRoads,supplies:r.chosen.slice(0,i+1).map(it=>it.id),message:'Pack '+item.name+' · '+item.weight+' kg.'}));out.push(Object.assign({kind:'done',message:route.noRoute?'Packing solution computed; Supplies is unreachable.':'Backpack ready. Profit '+r.profit+'.'},finalState(r)));return out;}
    return r.trace.filter(t=>['path','walk','done'].includes(t.kind));
  }
  function stopDashboard(){clearTimeout(app.dashboardTimer);app.dashboardTimer=null;}
  function animateDashboard(r){stopDashboard();const trace=dashboardTrace(r);let i=0;sync({mode:r.algorithm});const next=()=>{if(app.route!=='dashboard'||document.hidden)return;const t=trace[i++];if(!t)return;sync(t.kind==='done'?finalState(r):Object.assign({mode:r.algorithm},t));const msg=main.querySelector('#mission-message');if(msg)msg.textContent=t.message;if(i<trace.length)app.dashboardTimer=setTimeout(next,app.speed);};next();}
  function animateBoard(r){stopDashboard();const trace=dashboardTrace(r);let i=0;sync({mode:r.algorithm});const next=()=>{if(app.route!=='breadboard'||document.hidden)return;const t=trace[i++];if(!t)return;sync(t.kind==='done'?finalState(r):Object.assign({mode:r.algorithm},t));if(i<trace.length)app.dashboardTimer=setTimeout(next,app.speed);};next();}
  app.run=function(mode,options){options=options||{};app.mode=mode;app.result=solve(mode);if(app.route==='dashboard'){main.querySelectorAll('[data-mode]').forEach(el=>el.classList.toggle('active',el.dataset.mode===mode));main.querySelector('#active-algorithm').textContent=D.modes.find(m=>m.id===mode).name;main.querySelector('#current-result').innerHTML=resultMarkup(app.result);const dest=main.querySelector('#destination-control');dest.hidden=mode!=='dijkstra';writeResult(app.result);animateDashboard(app.result);}else if(app.route==='algorithms'){app.play(mode,'reset');app.play(mode,'play');}else{writeResult(app.result);if(app.route==='breadboard')animateBoard(app.result);else sync(finalState(app.result));}if(!options.fromBoard)app.sendMode(mode);return app.result;};
  app.selectDestination=function(id){app.target=id;if(app.route!=='dashboard'){location.hash='/dashboard';return;}main.querySelector('#destination').value=id;app.run('dijkstra');};
  function dashboard(){
    main.innerHTML='<div class="dashboard-grid"><aside class="mission-sidebar"><span class="eyebrow">MISSION CONTROL</span><p class="sidebar-title">Choose your<br>next move.</p><div class="mode-list">'+D.modes.map((m,i)=>'<button class="mode-button" data-mode="'+m.id+'"><span class="mode-icon">'+m.icon+'</span><span><strong>'+m.name+'</strong><small>'+m.subtitle+'</small></span><em>0'+(i+1)+'</em></button>').join('')+'</div><a class="sidebar-link" href="#/algorithms">⇄ Compare strategies <span>↗</span></a><a class="sidebar-link" href="#/breadboard">⌘ Breadboard connections <span>↗</span></a><div class="sidebar-note"><span class="signal-dot"></span><strong>Start: School</strong><p>Police Station is the Safe House. Supplies are reached through Factory.</p></div><button id="clap-button" class="clap-button"><span>◖◗</span><strong>CLAP TO SWITCH</strong><small>SIMULATED SENSOR · SPACE KEY</small></button><p class="sidebar-foot">Physical controls: three buttons on A5. Connect USB to listen to your board.</p></aside><section class="city-column"><div class="mission-heading"><div><span class="eyebrow">SURVIVAL IS AN ALGORITHM</span><h1>Find a way.<br><span>Make it out.</span></h1></div><div class="sector-badge">08<small>LOCATIONS</small></div></div><div class="map-panel"><div class="map-topline"><span><i class="signal-dot"></i> CITY MODEL / LIVE VIEW</span><span id="active-algorithm"></span></div><div id="city-map"></div><div class="map-bottomline"><span><i class="legend-line"></i> ACTIVE ROUTE</span><span><i class="legend-line blocked"></i> BARRICADE</span><span>WEIGHTS = ROAD COST</span></div></div><div class="mission-control"><label id="destination-control">Destination <select id="destination">'+choices()+'</select></label><button id="replay" class="button">↻ Replay mission</button><a class="text-link" href="#/algorithms">Open algorithm lab ↗</a></div><div class="mission-message"><span class="eyebrow">MISSION FEED</span><p id="mission-message" role="status" aria-live="polite">Ready at School.</p></div><div class="city-facts"><div><strong>'+D.roads.length+'</strong><span>OPEN ROADS</span></div><div><strong>'+D.capacity+'<small>kg</small></strong><span>BACKPACK CAPACITY</span></div><div><strong>3</strong><span>SURVIVAL STRATEGIES</span></div></div></section><aside class="telemetry-column"><div id="virtual-hardware" class="hardware-panel"></div><section id="current-result" class="result-card" aria-live="polite"></section><p class="hardware-footnote">The website LCD is virtual; the physical LCD is unused. Output indicators show the computed animation, not electrical measurements.</p></aside></div>';
    M.render(main.querySelector('#city-map'),app.roads,Array.from(app.blocked));H.render(main.querySelector('#virtual-hardware'));main.querySelectorAll('[data-mode]').forEach(el=>el.onclick=()=>app.run(el.dataset.mode));main.querySelector('#destination').onchange=e=>app.selectDestination(e.target.value);main.querySelector('#clap-button').onclick=app.clap;main.querySelector('#replay').onclick=()=>app.run(app.mode);app.run(app.mode,{fromBoard:true});
  }
  app.clap=function(){const next=D.modes[(D.modes.findIndex(m=>m.id===app.mode)+1)%D.modes.length].id;H.write('Simulated CLAP → '+next);V.toast('Simulated clap: '+D.modes.find(m=>m.id===next).name);if(app.route!=='dashboard'){location.hash='/dashboard';app.mode=next;}else app.run(next);};
  function playbackMarkup(mode){return'<div class="playback" data-playback="'+mode+'"><button class="button play primary" data-action="play">▶ Play</button><button class="button" data-action="pause">Ⅱ Pause</button><button class="button" data-action="back">← Back</button><button class="button" data-action="step">Step →</button><button class="button" data-action="reset">↻ Reset</button><label>Speed <select class="speed"><option value="700">0.5×</option><option value="350" selected>1×</option><option value="100">3×</option><option value="30">10×</option></select></label><span class="play-count">0 / 0</span></div><div class="trace-message" id="trace-'+mode+'" role="status" aria-live="polite">Press Play or Step to inspect the real computation.</div>';}
  function comparison(){const k=solve('knapsack'),g=A.greedy(selectedItems(),app.capacity,false),f=A.greedy(selectedItems(),app.capacity,true);return'<div class="section-heading"><div><span class="eyebrow">SAME BACKPACK. DIFFERENT RULES.</span><h2>Why the strategy matters.</h2></div></div><div class="comparison-grid">'+[{title:'0/1 dynamic programming',r:k,label:'OPTIMAL WHOLE ITEMS',names:k.chosen.map(i=>i.name).join(' + '),good:true},{title:'Ratio greedy, whole items',r:g,label:'A HEURISTIC',names:g.chosen.map(i=>i.item.name).join(' + ')},{title:'Fractional knapsack',r:f,label:'ITEMS CAN BE SPLIT',names:f.chosen.map(i=>(i.fraction<1?Math.round(i.fraction*100)+'% ':'')+i.item.name).join(' + ')}].map(c=>'<article class="compare-card '+(c.good?'best':'')+'"><span class="eyebrow">'+c.label+'</span><h3>'+c.title+'</h3><strong>'+V.number(c.r.profit)+'</strong><p>'+V.escape(c.names||'No items')+'</p><small>'+V.number(c.r.weight)+' / '+app.capacity+' kg</small></article>').join('')+'</div><p class="muted">Whole-item optimal sets: '+k.tiedSets.map(set=>set.map(id=>D.items.find(i=>i.id===id).name).join(' + ')).join(' <b>or</b> ')+'. The installed board chooses Food + Water + Ammunition at the default inputs (profit 370; fractional would be 425). Fractional packing solves a different problem: 0/1 is right when you cannot carry half a crate.</p>';}
  function algorithms(){
    main.innerHTML='<div class="page-heading"><div><span class="eyebrow">ALGORITHM LAB</span><h1>Watch the decisions.</h1><p>Every table cell and route comes from a computed trace. Change the inputs, then step through.</p></div><a class="button" href="#/dashboard">Back to city ↗</a></div><div class="lab-grid"><div class="lab-map panel"><div id="city-map"></div><p id="lab-map-note" class="muted">The map follows the most recently controlled algorithm.</p></div><div class="lab-telemetry"><div id="virtual-hardware"></div><section id="current-result" class="result-card" aria-live="polite"></section></div></div><nav class="lab-jump"><a href="#dijkstra-lab">01 / Dijkstra</a><a href="#knapsack-lab">02 / Knapsack</a><a href="#tsp-lab">03 / Zombie TSP</a><a href="#compare-lab">Compare strategies</a></nav><section id="dijkstra-lab" class="panel algorithm-section"><div class="section-heading"><div><span class="eyebrow">01 / SHORTEST PATH</span><h2>Dijkstra: a way to safety.</h2></div><span class="complexity">'+D.complexities.dijkstra+'</span></div><p>Repeatedly settle the closest unvisited location and relax its neighbours. This implementation uses an array scan.</p><div class="input-row"><label>Start <input value="School" readonly></label><label>Destination <select id="lab-destination">'+choices()+'</select></label></div>'+playbackMarkup('dijkstra')+'<div class="dijkstra-grid"><div class="table-scroll"><table id="distance-table"><thead><tr><th>Location</th><th>Distance</th><th>State</th></tr></thead><tbody></tbody></table></div><div class="frontier-box"><span class="eyebrow">FRONTIER</span><p id="frontier-list"></p><span class="eyebrow">SETTLED</span><p id="visited-list"></p></div></div><details class="scenario-editor"><summary>What if? Barricades and road weights</summary><p class="muted">Edits affect the browser only. Reload or Reset map to restore your physical model.</p><div id="road-editor"></div><form id="add-road"><label>From <select name="from">'+choices()+'</select></label><label>To <select name="to">'+choices()+'</select></label><label>Cost <input name="weight" type="number" min="0" max="999" step="1" required placeholder="Road cost"></label><button class="button" type="submit">Add road</button></form><button class="button" id="reset-map">Reset map</button></details></section><section id="knapsack-lab" class="panel algorithm-section"><div class="section-heading"><div><span class="eyebrow">02 / MAXIMUM VALUE</span><h2>Knapsack: pack what matters.</h2></div><span class="complexity">'+D.complexities.knapsack+'</span></div><p>Choose whole items under the weight limit. Fill the DP table, then backtrack the selected items. The Supplies route intentionally lights School → Factory → Supplies.</p><div class="items-row">'+D.items.map(i=>'<label class="item-choice"><input type="checkbox" data-item="'+i.id+'"'+(app.items.has(i.id)?' checked':'')+'><span class="item-icon">'+i.icon+'</span><span><strong>'+i.name+'</strong><small>'+i.weight+' kg · profit '+i.profit+'</small></span></label>').join('')+'</div><label class="capacity-control">Backpack capacity <input id="capacity" type="range" min="0" max="40" value="'+app.capacity+'"><output id="capacity-value">'+app.capacity+' kg</output></label>'+playbackMarkup('knapsack')+'<div class="table-scroll dp-scroll"><table id="knapsack-table" class="dp-table"></table></div><div class="backpack"><span class="backpack-icon">▣</span><div><span class="eyebrow">BACKPACK / BACKTRACKED ITEMS</span><div id="packed-items"></div><p id="pack-summary" class="muted"></p></div></div></section><section id="compare-lab" class="panel">'+comparison()+'</section><section id="tsp-lab" class="panel algorithm-section"><div class="section-heading"><div><span class="eyebrow">03 / COMPLETE SCOUTING TOUR</span><h2>Zombie TSP: leave no place unseen.</h2></div><span class="complexity">'+D.complexities.tsp+'</span></div><p>Held–Karp finds a tour on the shortest-path distance matrix. Its legs expand into real roads. Your map is a tree: a closed scouting walk must retrace roads; it is not a Hamiltonian road cycle.</p>'+playbackMarkup('tsp')+'<div class="table-scroll tsp-scroll"><table id="tsp-table" class="dp-table"></table></div><div id="tsp-comparison" class="tsp-stats"></div><div id="scaling-chart"></div><p class="muted">Chart: theoretical growth, log₁₀ scale, with n = total locations. On eight locations the useful advantage is scaling, not a timing guarantee. Counters above count actual candidate evaluations and edge additions; they exclude rendering and the shared all-pairs preprocessing.</p></section>';
    M.render(main.querySelector('#city-map'),app.roads,Array.from(app.blocked));H.render(main.querySelector('#virtual-hardware'));
    main.querySelectorAll('.playback').forEach(el=>{el.querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>app.play(el.dataset.playback,b.dataset.action));el.querySelector('.speed').onchange=e=>{app.players[el.dataset.playback].speed=+e.target.value;};});
    main.querySelector('#lab-destination').onchange=e=>{app.mode='dijkstra';app.target=e.target.value;app.refresh('dijkstra');};main.querySelector('#capacity').oninput=e=>{app.mode='knapsack';app.capacity=+e.target.value;main.querySelector('#capacity-value').textContent=app.capacity+' kg';app.refresh('knapsack');main.querySelector('#compare-lab').innerHTML=comparison();};main.querySelectorAll('[data-item]').forEach(el=>el.onchange=()=>{app.mode='knapsack';el.checked?app.items.add(el.dataset.item):app.items.delete(el.dataset.item);app.refresh('knapsack');main.querySelector('#compare-lab').innerHTML=comparison();});
    main.querySelector('#add-road').onsubmit=e=>{e.preventDefault();const form=e.currentTarget,from=form.elements.from.value,to=form.elements.to.value,weight=+form.elements.weight.value;if(from===to||app.roads.some(r=>r.from===from&&r.to===to||r.to===from&&r.from===to)){V.toast('Choose two different locations without an existing road.');return;}if(!Number.isFinite(weight)||weight<0||weight>999)return;app.roads.push({id:'custom-'+Date.now(),from,to,weight});app.graphChanged();};main.querySelector('#reset-map').onclick=()=>{app.roads=D.roads.map(r=>Object.assign({},r));app.blocked.clear();app.graphChanged();};renderRoadEditor();D.modes.forEach(m=>app.refresh(m.id));app.result=solve(app.mode);main.querySelector('#current-result').innerHTML=resultMarkup(app.result);writeResult(app.result);sync({mode:app.mode});drawScaling();
    main.querySelectorAll('.lab-jump a').forEach(a=>a.onclick=e=>{e.preventDefault();main.querySelector(a.getAttribute('href')).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});});
  }
  function renderRoadEditor(){main.querySelector('#road-editor').innerHTML=app.roads.map(r=>'<div class="road-edit"><label><input type="checkbox" data-block="'+r.id+'"'+(app.blocked.has(r.id)?' checked':'')+'> Barricade</label><span>'+V.escape(V.name(r.from)+' ↔ '+V.name(r.to))+'</span><label class="weight-label">Cost <input data-weight="'+r.id+'" type="number" min="0" max="999" step="1" value="'+r.weight+'"></label><button class="button tiny" data-remove="'+r.id+'">Remove</button></div>').join('');main.querySelectorAll('[data-block]').forEach(el=>el.onchange=()=>{el.checked?app.blocked.add(el.dataset.block):app.blocked.delete(el.dataset.block);app.graphChanged();});main.querySelectorAll('[data-weight]').forEach(el=>el.onchange=()=>{const r=app.roads.find(r=>r.id===el.dataset.weight),w=+el.value;if(!Number.isFinite(w)||w<0||w>999){el.value=r.weight;V.toast('Use a cost between 0 and 999.');return;}r.weight=w;app.graphChanged();});main.querySelectorAll('[data-remove]').forEach(el=>el.onclick=()=>{app.roads=app.roads.filter(r=>r.id!==el.dataset.remove);app.blocked.delete(el.dataset.remove);app.graphChanged();});}
  app.graphChanged=function(){stopAllPlayers();M.render(main.querySelector('#city-map'),app.roads,Array.from(app.blocked));renderRoadEditor();D.modes.forEach(m=>app.refresh(m.id));app.result=solve(app.mode);main.querySelector('#current-result').innerHTML=resultMarkup(app.result);writeResult(app.result);sync({mode:app.mode});V.toast('Browser scenario updated. Physical board inputs are unchanged.');};
  function stopAllPlayers(){Object.values(app.players).forEach(p=>{clearTimeout(p.timer);p.playing=false;});}
  app.refresh=function(mode){const old=app.players[mode];if(old)clearTimeout(old.timer);const r=solve(mode);app.players[mode]={result:r,index:-1,playing:false,speed:old?old.speed:350,timer:null};renderTrace(mode);if(app.mode===mode){app.result=r;main.querySelector('#current-result').innerHTML=resultMarkup(r);writeResult(r);}if(mode==='tsp'){main.querySelector('#tsp-comparison').innerHTML='<div><span class="eyebrow">HELD–KARP</span><strong>'+r.operations.toLocaleString()+'</strong><small>candidate evaluations · '+(r.states||[]).length+' states</small></div><div><span class="eyebrow">BRUTE FORCE</span><strong>'+r.brute.operations.toLocaleString()+'</strong><small>'+r.brute.permutations.toLocaleString()+' complete permutations</small></div><div><span class="eyebrow">VERIFIED COST</span><strong>'+V.number(r.cost)+'</strong><small>DP '+V.number(r.cost)+' = brute '+V.number(r.brute.cost)+' · '+r.brute.ties+' tied orders</small></div>';}};
  app.play=function(mode,action){const p=app.players[mode];if(!p)return;const changed=app.mode!==mode;app.mode=mode;app.result=p.result;if(changed||action==='reset')writeResult(p.result);main.querySelector('#current-result').innerHTML=resultMarkup(p.result);clearTimeout(p.timer);p.playing=false;if(action==='reset')p.index=-1;else if(action==='step')p.index=Math.min(p.result.trace.length-1,p.index+1);else if(action==='back')p.index=Math.max(-1,p.index-1);else if(action==='play'){if(p.index>=p.result.trace.length-1)p.index=-1;p.playing=true;}renderTrace(mode);if(action==='play'){writeResult(p.result);const tick=()=>{if(!p.playing||document.hidden)return;p.index++;renderTrace(mode);if(p.index>=p.result.trace.length-1){p.playing=false;renderTrace(mode);return;}p.timer=setTimeout(tick,p.speed);};tick();}};
  function renderTrace(mode){
    const p=app.players[mode],r=p.result,t=p.index<0?null:r.trace[p.index],control=main.querySelector('[data-playback="'+mode+'"]');if(!control)return;control.querySelector('.play-count').textContent=(p.index+1)+' / '+r.trace.length;control.querySelector('[data-action="play"]').classList.toggle('running',p.playing);control.querySelector('[data-action="back"]').disabled=p.index<0;control.querySelector('[data-action="step"]').disabled=p.index===r.trace.length-1;main.querySelector('#trace-'+mode).textContent=t?t.message:'Press Play or Step to inspect the real computation.';
    if(mode==='dijkstra'){
      const dist=t?t.distances:Object.fromEntries(D.nodes.map(n=>[n.id,n.id===D.source?0:Infinity])),visited=t?t.visited:[],frontier=t?t.frontier:[D.source];main.querySelector('#distance-table tbody').innerHTML=D.nodes.map(n=>'<tr class="'+(t&&t.node===n.id?'current-cell':'')+'"><td>'+V.escape(n.alias||n.name)+'</td><td>'+V.number(dist[n.id])+'</td><td>'+((visited||[]).includes(n.id)?'Settled':(frontier||[]).includes(n.id)?'Frontier':'Unreached')+'</td></tr>').join('');main.querySelector('#frontier-list').textContent=(frontier||[]).map(V.name).join(' · ')||'Empty';main.querySelector('#visited-list').textContent=(visited||[]).map(V.name).join(' · ')||'None';if(app.mode===mode)sync(t?Object.assign({mode},t):{mode});
    }else if(mode==='knapsack'){
      const items=selectedItems(),seen=new Map(),packed=[];r.trace.slice(0,p.index+1).forEach(s=>{if(s.kind==='cell')seen.set(s.row+':'+s.col,s.value);if(s.kind==='backtrack'&&s.take)packed.push(s.item);});main.querySelector('#knapsack-table').innerHTML='<thead><tr><th>Item / kg</th>'+Array.from({length:app.capacity+1},(_,w)=>'<th>'+w+'</th>').join('')+'</tr></thead><tbody>'+['No items'].concat(items.map(i=>i.name)).map((name,row)=>'<tr><th>'+V.escape(name)+'</th>'+Array.from({length:app.capacity+1},(_,col)=>{const key=row+':'+col;return'<td class="'+(t&&row===t.row&&col===t.col?'current-cell '+(t.take||t.decision==='take'?'take-cell':''):'')+'">'+(seen.has(key)?seen.get(key):'·')+'</td>';}).join('')+'</tr>').join('')+'</tbody>';main.querySelector('#packed-items').innerHTML=packed.map(id=>'<span class="packed-item">'+D.items.find(i=>i.id===id).name+'</span>').join('')||'<span class="muted">Items appear during backtracking.</span>';const weight=packed.reduce((sum,id)=>sum+D.items.find(i=>i.id===id).weight,0);main.querySelector('#pack-summary').textContent=weight+' / '+app.capacity+' kg packed';if(app.mode===mode)sync({mode,node:packed.length?D.supplies:D.source,supplies:packed,activeRoads:packed.length?supplyRoute().pathRoads:[]});
    }else{
      const known=new Map();r.trace.slice(0,p.index+1).filter(s=>s.kind==='dp').forEach(s=>known.set(s.mask+':'+s.end,s.cost));const others=r.others||D.nodes.filter(n=>n.id!==D.source).map(n=>n.id);main.querySelector('#tsp-table').innerHTML='<thead><tr><th>Visited subset / end</th>'+others.map(id=>'<th>'+V.code(id)+'</th>').join('')+'</tr></thead><tbody>'+Array.from({length:(1<<others.length)-1},(_,i)=>i+1).map(mask=>'<tr data-mask="'+mask+'"><th title="'+others.filter((_,i)=>mask&(1<<i)).map(V.name).join(', ')+'">'+mask.toString(2).padStart(others.length,'0')+'</th>'+others.map((id,i)=>'<td class="'+(t&&t.mask===mask&&t.end===id?'current-cell':'')+'">'+(!(mask&(1<<i))?'—':known.has(mask+':'+id)?V.number(known.get(mask+':'+id)):'·')+'</td>').join('')+'</tr>').join('')+'</tbody>';if(app.mode===mode)sync(t&&t.kind==='walk'?Object.assign({mode},t):t&&t.kind==='done'?finalState(r):{mode});
    }
    if(p.playing&&t&&(t.kind==='dp'||t.kind==='cell')){const table=main.querySelector(mode==='tsp'?'#tsp-table':'#knapsack-table'),cell=table.querySelector('.current-cell'),scroll=table.parentElement;if(cell){const top=cell.offsetTop;if(top<scroll.scrollTop||top>scroll.scrollTop+scroll.clientHeight-55)scroll.scrollTop=Math.max(0,top-scroll.clientHeight/2);const left=cell.offsetLeft;if(left<scroll.scrollLeft||left>scroll.scrollLeft+scroll.clientWidth-60)scroll.scrollLeft=Math.max(0,left-scroll.clientWidth/2);}}
  }
  function drawScaling(){const host=main.querySelector('#scaling-chart'),svg=V.svg('svg',{viewBox:'0 0 850 270',role:'img','aria-label':'Theoretical complexity growth on a logarithmic scale: factorial versus Held-Karp',class:'scaling-svg'},host);const values=Array.from({length:9},(_,i)=>{const n=i+4;let fact=1;for(let j=2;j<n;j++)fact*=j;return{n,brute:Math.log10(fact),dp:Math.log10(n*n*Math.pow(2,n))};});const max=8,x=n=>75+(n-4)*87,y=v=>222-v/max*185;for(let i=0;i<=8;i+=2){V.svg('line',{x1:75,y1:y(i),x2:790,y2:y(i),stroke:'#394332','stroke-dasharray':'3 6'},svg);V.text(svg,59,y(i)+4,'10^'+i,{fill:'#89987e','text-anchor':'end','font-size':11});}values.forEach(v=>V.text(svg,x(v.n),245,v.n,{'text-anchor':'middle',fill:'#aab89c','font-size':12}));[['brute','#ed827c'],['dp','#b5e779']].forEach(([key,color])=>{V.svg('polyline',{points:values.map(v=>x(v.n)+','+y(v[key])).join(' '),fill:'none',stroke:color,'stroke-width':3},svg);values.forEach(v=>V.svg('circle',{cx:x(v.n),cy:y(v[key]),r:3.5,fill:color},svg));});V.text(svg,74,21,'THEORETICAL GROWTH / LOG₁₀ SCALE',{fill:'#a9b99a','font-size':12,'font-family':'monospace'});V.text(svg,430,21,'● (n−1)! brute force',{fill:'#ed827c','font-size':12});V.text(svg,630,21,'● n²·2ⁿ Held–Karp',{fill:'#b5e779','font-size':12});V.text(svg,440,266,'NUMBER OF LOCATIONS (n)',{fill:'#95a58a','font-size':10,'text-anchor':'middle'});}
  function about(){const a=D.author;main.innerHTML='<div class="page-heading"><div><span class="eyebrow">BEHIND THE MODEL</span><h1>Survival, computed.</h1><p>A physical city meets three classic algorithmic problems.</p></div><span class="tag">DAA / ARDUINO UNO</span></div><div class="about-grid"><section class="panel author-panel"><span class="eyebrow">BUILT BY</span><div class="author-mark">SS<span>×</span></div><h2>'+a.name+'</h2><p>'+a.class+' · '+a.subject+'</p><p>'+a.college+'<br>'+a.university+'</p><div class="author-credits"><span>TEAM</span><p>Add team members</p><span>FACULTY GUIDE</span><p>Add faculty name</p></div><a class="button" href="'+D.repo.replace(/\.git$/,'')+'" target="_blank" rel="noopener noreferrer">View project repository ↗</a></section><div><section class="panel"><span class="eyebrow">THE IDEA</span><h2>One city. Three decisions.</h2><p>Begin at School. Find the cheapest route to the Safe House, choose the most valuable supplies for an 18 kg backpack, or scout every location and return.</p><div class="about-algorithms">'+D.modes.map(m=>'<div><span>'+m.icon+'</span><strong>'+m.name+'</strong><code>'+D.complexities[m.id]+'</code></div>').join('')+'</div><p>This site runs the algorithms locally. It works offline, has no third-party scripts and can optionally read the installed Arduino over USB.</p></section><section class="panel"><span class="eyebrow">YOUR PHYSICAL MODEL</span><h2>Hardware status.</h2><ul><li>Installed: Arduino Uno, seven road LEDs, four supply LEDs and three buttons sharing A5.</li><li>The physical LCD is unused. The dot-matrix LCD on this site is virtual.</li><li>The Supplies route intentionally lights School → Factory → Supplies.</li><li>CLAP and browser audio are simulations. The diagram’s optional piezo and sound sensor are proposed additions.</li><li>USB serial reports board output; browser LEDs represent computed states and do not detect failed physical LEDs.</li></ul><p>Police Station and Safe House share the same node. Statue is excluded. Factory → Weapon Shop is blocked and absent from the graph.</p></section><section class="panel"><span class="eyebrow">GRAPH / SINGLE SOURCE OF TRUTH</span><h2>Roads and supplies.</h2><div class="table-scroll"><table><thead><tr><th>Road</th><th>Cost</th></tr></thead><tbody>'+D.roads.map(r=>'<tr><td>'+V.name(r.from)+' ↔ '+V.name(r.to)+'</td><td>'+r.weight+'</td></tr>').join('')+'</tbody></table></div><p class="muted">Graph, inventory, wiring, metadata and hardware profiles all come from js/data.js. Weight edits in the Algorithm Lab reset on reload.</p></section></div></div>';}
  function navigate(){stopDashboard();stopAllPlayers();cancelAnimationFrame(H.raf);app.route=(location.hash.replace(/^#\//,'').split('/')[0]||'dashboard');if(!['dashboard','algorithms','breadboard','about'].includes(app.route))app.route='dashboard';document.querySelectorAll('.topbar nav a').forEach(a=>{const active=a.getAttribute('href')==='#/'+app.route;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});if(app.route==='dashboard')dashboard();else if(app.route==='algorithms')algorithms();else if(app.route==='breadboard'){B.render(main);B.update(app.live);}else about();document.title='SurviveX — '+({dashboard:'Mission Control',algorithms:'Algorithm Lab',breadboard:'Connections',about:'About'})[app.route];window.scrollTo(0,0);}
  function defaultScenario(mode){const sameGraph=app.blocked.size===0&&app.roads.length===D.roads.length&&D.roads.every(r=>app.roads.some(q=>q.id===r.id&&q.from===r.from&&q.to===r.to&&q.weight===r.weight));return sameGraph&&(mode!=='dijkstra'||app.target===D.safeHouse)&&(mode!=='knapsack'||app.capacity===D.capacity&&app.items.size===D.items.length);}
  app.sendMode=async function(mode){if(!app.writer)return;if(!defaultScenario(mode)){V.toast('Edited scenario runs in the browser. The board keeps its fixed model.');return;}try{await app.writer.write(new TextEncoder().encode(D.modes.find(m=>m.id===mode).command+'\n'));H.write('Sent '+mode+' command over USB','WEB → UNO');}catch(e){V.toast('USB command failed: '+e.message);}};
  function serialLine(line){H.write(line,'UNO');const match=/Button\s*=\s*([123])/.exec(line);if(match){const mode=D.modes[+match[1]-1].id;if(!defaultScenario(mode)){app.roads=D.roads.map(r=>Object.assign({},r));app.blocked.clear();app.target=D.safeHouse;app.capacity=D.capacity;app.items=new Set(D.items.map(i=>i.id));if(app.route==='algorithms')algorithms();if(app.route==='dashboard')M.render(main.querySelector('#city-map'),app.roads,[]);V.toast('Physical button: restored the board’s default inputs.');}app.run(mode,{fromBoard:true});}}
  function connectionLabel(connected){document.querySelector('#connection-status').textContent=connected?'USB SERIAL CONNECTED · 9600 BAUD':'BROWSER SIMULATION';document.querySelector('#usb-connect').classList.toggle('connected',connected);document.querySelector('#usb-connect span:last-child').textContent=connected?'Disconnect Arduino':'Connect Arduino';}
  app.disconnect=async function(){const port=app.serial;app.serial=null;if(app.reader){try{await app.reader.cancel();}catch(e){/* port may have already disconnected */}}if(app.serialTask){try{await app.serialTask;}catch(e){/* reader already closed */}}if(app.writer){try{app.writer.releaseLock();}catch(e){}app.writer=null;}if(port){try{await port.close();}catch(e){/* detached device */}}connectionLabel(false);H.write('USB disconnected; browser simulation remains available.');};
  app.connect=async function(){if(app.serial){await app.disconnect();return;}if(!navigator.serial){V.toast('USB serial needs Chrome or Edge on localhost / HTTPS. The browser simulation works here.');return;}try{const port=await navigator.serial.requestPort({filters:[{usbVendorId:0x1a86}]});await port.open({baudRate:D.hardware.baudRate});app.serial=port;app.writer=port.writable.getWriter();connectionLabel(true);H.write('USB connected. Board reset; wait for its ready message.','UNO');app.buffer='';app.serialTask=(async()=>{const decoder=new TextDecoder();try{app.reader=port.readable.getReader();while(app.serial){const{value,done}=await app.reader.read();if(done)break;app.buffer+=decoder.decode(value,{stream:true});const lines=app.buffer.split(/\r?\n/);app.buffer=lines.pop();lines.filter(Boolean).forEach(serialLine);}}catch(e){H.write('USB read stopped: '+e.message,'UNO');}finally{if(app.reader){app.reader.releaseLock();app.reader=null;}if(app.serial){app.serial=null;if(app.writer){app.writer.releaseLock();app.writer=null;}try{await port.close();}catch(e){}connectionLabel(false);}}})();}catch(e){V.toast(e.name==='NotFoundError'?'No Arduino selected. Simulation is ready.':'USB connection: '+e.message);connectionLabel(false);}};
  document.querySelector('#usb-connect').onclick=app.connect;document.querySelector('#footer').innerHTML='<span>SURVIVE<span class="toxic">X</span> · SURVIVAL, COMPUTED.</span><span>'+D.author.name+' / '+D.author.class+' / '+D.author.college+' / '+D.author.university+' / '+D.author.subject+'</span><span>LOCAL-FIRST · NO CLOUD REQUIRED</span>';document.querySelector('.strip-end').textContent=D.nodes.length+' LOCATIONS / '+D.roads.length+' ROADS / '+D.modes.length+' ALGORITHMS';
  document.addEventListener('keydown',e=>{if(e.code==='Space'&&!e.repeat&&!['INPUT','SELECT','TEXTAREA','BUTTON','A'].includes(e.target.tagName)&&!e.target.isContentEditable){e.preventDefault();app.clap();}});document.addEventListener('visibilitychange',()=>{document.body.classList.toggle('tab-hidden',document.hidden);if(document.hidden){stopDashboard();stopAllPlayers();}});window.addEventListener('hashchange',navigate);root.SXApp=app;navigate();
})(window);
```

## js/breadboard.js

```javascript
(function(root){
  'use strict';const D=root.SurviveXData,V=root.SXView;
  const B={host:null,profile:'current',group:'all',search:'',step:0,isLive:true,live:{activeRoads:[],supplies:[]}};
  const groups=['power','lcd','roads','supplies','buttons','buzzer','sensor'];
  function hole(h){const m=/^(top[+-]|[a-j])(\d+)$/.exec(h);if(!m)return null;const x=365+(+m[2]-1)*17.7;let y;if(m[1]==='top+')y=290;else if(m[1]==='top-')y=312;else{const i='abcdefghij'.indexOf(m[1]);y=i<5?355+i*18:490+(i-5)*18;}return{x,y};}
  function endpointName(e){return e.part==='breadboard'?'Breadboard '+e.hole:(D.hardware.parts.find(p=>p.id===e.part).name)+' · '+e.pin;}
  function rows(){return D.hardware.netlist.filter(w=>D.hardware.profiles[B.profile].includes(w.status));}
  B.render=function(host){
    this.host=host;host.innerHTML='<div class="page-heading"><div><span class="eyebrow">THE CITY, UNDER THE HOOD</span><h1>Follow the signal.</h1><p>A connection diagram generated from the same netlist as the wire list.</p></div><span class="tag">11 LEDS · A5 BUTTON LADDER</span></div><div class="notice">Top column numbers apply to both halves: A40–E40 and F40–J40 are separate groups. Suggested wire colours and rail holes are reference positions; check your physical build.</div><div class="board-toolbar"><label>Hardware profile <select id="board-profile"><option value="current">Current: LEDs + 3 buttons</option><option value="archived">Earlier LCD wiring (archived)</option><option value="proposed">Optional buzzer + sound sensor (proposed)</option></select></label><div class="filter-tabs">'+['all'].concat(groups).map(g=>'<button data-board-group="'+g+'" class="button tiny">'+g+'</button>').join('')+'</div></div><div class="board-shell"><div class="board-scroll"><div id="board-drawing"></div></div><p id="wire-tooltip" class="wire-tooltip" role="status">Hover or focus a wire to follow its circuit. LED colours mirror the browser animation.</p></div><div id="board-validation" class="validation"></div><div class="board-bottom"><section class="panel build-stepper"><span class="eyebrow">BUILD GUIDE</span><div class="step-controls"><button id="build-back" class="button tiny">← Back</button><strong id="build-count"></strong><button id="build-next" class="button tiny">Next →</button></div><h2 id="build-title"></h2><p id="build-note"></p><ol id="build-wires"></ol></section><section class="panel wire-list"><div class="section-heading"><h2>Wire list</h2><button id="copy-wires" class="button tiny">Copy list</button></div><label class="search-label">Find a pin, part or hole <input id="wire-search" type="search" placeholder="Try D7, A5 or j45"></label><div class="table-scroll"><table><thead><tr><th>Wire</th><th>From</th><th>To</th><th>Net / status</th></tr></thead><tbody id="wire-rows"></tbody></table></div></section></div><details class="panel"><summary>Physical hardware notes</summary><ul>'+D.hardware.notes.map(n=>'<li>'+V.escape(n)+'</li>').join('')+'</ul></details>';
    host.querySelector('#board-profile').value=this.profile;
    host.querySelector('#board-profile').onchange=e=>{this.profile=e.target.value;this.draw();this.list();this.build();};
    host.querySelectorAll('[data-board-group]').forEach(el=>el.onclick=()=>{this.group=el.dataset.boardGroup;this.filter();this.list();});
    host.querySelector('#wire-search').oninput=e=>{this.search=e.target.value.toLowerCase();this.list();};
    host.querySelector('#copy-wires').onclick=async()=>{const text='WIRE\tFROM\tTO\tNET\tSTATUS\n'+this.visibleWires().map(w=>[w.id,endpointName(w.from),endpointName(w.to),w.net,w.status].join('\t')).join('\n');try{await navigator.clipboard.writeText(text);V.toast('Wire list copied.');}catch(e){V.download('survivex-wires.txt',text);}};
    host.querySelector('#build-back').onclick=()=>{this.step=Math.max(0,this.step-1);this.build();};host.querySelector('#build-next').onclick=()=>{this.step=Math.min(groups.length-1,this.step+1);this.build();};
    const controls=document.createElement('div');controls.className='board-live-controls';controls.innerHTML='<label><input id="board-live" type="checkbox"'+(this.isLive?' checked':'')+'> Live browser LEDs</label><label>Run a mission <select id="board-mode">'+D.modes.map(m=>'<option value="'+m.id+'">'+m.name+'</option>').join('')+'</select></label><button id="board-run" class="button tiny">Run animation</button>';host.querySelector('.board-toolbar').appendChild(controls);controls.querySelector('#board-live').onchange=e=>{this.isLive=e.target.checked;this.update(this.live);};controls.querySelector('#board-run').onclick=()=>root.SXApp.run(controls.querySelector('#board-mode').value);
    this.draw();this.list();this.build();
  };
  B.draw=function(){
    const mount=this.host.querySelector('#board-drawing');mount.innerHTML='';const svg=V.svg('svg',{viewBox:'0 0 1800 1100',role:'group','aria-label':'Arduino Uno and breadboard wiring diagram',class:'breadboard-svg'},mount);this.svg=svg;this.anchors={};
    const parts=D.hardware.parts.filter(p=>D.hardware.profiles[this.profile].includes(p.status));
    const add=(part,pin,x,y,parent)=>{this.anchors[part+':'+pin]={x,y};V.svg('circle',{cx:x,cy:y,r:3,fill:'#dacba4','data-pin-key':part+':'+pin},parent||svg);};
    V.text(svg,28,38,'SURVIVEX / SIGNAL MAP',{'font-size':23,fill:'#b5dd85','font-family':'monospace'});V.text(svg,28,65,this.profile==='current'?'INSTALLED CIRCUITS':this.profile==='archived'?'ARCHIVED LCD PROFILE — LCD UNUSED':'PROPOSED ADDITIONS — NOT INSTALLED',{'font-size':14,fill:'#b6bdb0','font-family':'monospace'});
    const bb=V.svg('g',{'data-part':'breadboard'},svg);V.svg('rect',{x:335,y:255,width:1150,height:385,rx:18,fill:'#d6d5c7',stroke:'#787b70','stroke-width':4},bb);V.svg('rect',{x:344,y:442,width:1132,height:24,rx:4,fill:'#8a8d83'},bb);
    for(let c=1;c<=63;c++){
      V.text(bb,hole('a'+c).x,344,c,{'text-anchor':'middle','font-size':10,fill:'#40483c','font-family':'monospace'});
      ['top+','top-'].concat('abcdefghij'.split('')).forEach(r=>{const a=hole(r+c);V.svg('circle',{cx:a.x,cy:a.y,r:3.1,fill:'#444b40','data-pin-key':'breadboard:'+r+c},bb);this.anchors['breadboard:'+r+c]=a;});
    }
    'abcdefghij'.split('').forEach(r=>V.text(bb,350,hole(r+'1').y+3,r.toUpperCase(),{'font-size':11,fill:'#3b493d'}));
    [['top+', '#bb3b43'],['top-','#32728e']].forEach(([r,color])=>{const y=hole(r+'1').y-8;[0,1].forEach(i=>V.svg('line',{x1:361+i*570,y1:y,x2:882+i*570,y2:y,stroke:color,'stroke-width':2},bb));V.text(bb,347,y+4,r.slice(3),{fill:color,'font-size':15});});
    V.text(bb,905,454,'CENTRE GAP · NO CONNECTION ACROSS',{'font-size':10,'text-anchor':'middle',fill:'#ddd'});
    const uno=V.svg('g',{'data-part':'uno'},svg);V.svg('rect',{x:28,y:265,width:260,height:365,rx:14,fill:'#226274',stroke:'#67a3af','stroke-width':3},uno);V.svg('rect',{x:37,y:320,width:47,height:54,fill:'#b6b7b2',stroke:'#757e80','stroke-width':3},uno);V.svg('rect',{x:37,y:410,width:45,height:32,rx:3,fill:'#202c2a'},uno);V.svg('rect',{x:127,y:388,width:95,height:94,fill:'#15252a',stroke:'#647377'},uno);V.text(uno,150,540,'ARDUINO',{'text-anchor':'middle',fill:'#c2e1da','font-size':23});V.text(uno,150,567,'UNO',{'text-anchor':'middle',fill:'#c2e1da','font-size':27});V.text(uno,151,436,'ATmega328P',{'text-anchor':'middle',fill:'#96b1b4','font-size':10});
    D.hardware.parts.find(p=>p.id==='uno').pins.forEach((p,i)=>{const digital=/^D/.test(p),n=digital?+p.slice(1):i<2?i:+p.slice(1)+2;const x=digital?266:95+n*22,y=digital?300+n*20:607;add('uno',p,x,y,uno);V.text(uno,digital?248:x,digital?y+4:594,p,{'text-anchor':digital?'end':'middle','font-size':10,fill:'#e1e9de','font-family':'monospace'});});
    parts.filter(p=>!['uno','breadboard'].includes(p.id)).forEach(p=>{
      const g=V.svg('g',{'data-part':p.id,'data-circuit':p.circuit||p.id,'data-group':p.group},svg);
      if(p.kind==='resistor'){
        const a=hole(p.holes[0]),b=hole(p.holes[1]);add(p.id,'1',a.x,a.y,g);add(p.id,'2',b.x,b.y,g);V.svg('line',{x1:a.x,y1:a.y,x2:b.x,y2:b.y,stroke:'#87816a','stroke-width':3},g);const x=(a.x+b.x)/2-24,y=(a.y+b.y)/2-7;V.svg('rect',{x,y,width:48,height:14,rx:4,fill:'#d0b88b',stroke:'#8a7852'},g);['#b93734','#b93734','#7a4524','#cfab54'].forEach((c,i)=>V.svg('rect',{x:x+7+i*9,y,width:4,height:14,fill:c},g));
      }else if(p.kind==='led'){
        const{x,y}=p.position;V.svg('path',{d:'M'+(x-15)+' '+y+' v-20 a15 15 0 0 1 30 0 v20 z',fill:p.group==='supplies'?'#7a994a':'#696f59',stroke:'#a2b994','stroke-width':2,class:'diagram-led','data-led':p.circuit},g);add(p.id,'A',x-8,y+28,g);add(p.id,'K',x+8,y+19,g);V.svg('line',{x1:x-8,y1:y,x2:x-8,y2:y+28,stroke:'#bec5ae','stroke-width':2},g);V.svg('line',{x1:x+8,y1:y,x2:x+8,y2:y+19,stroke:'#bec5ae','stroke-width':2},g);V.text(g,x,y+48,p.pinLabel,{'text-anchor':'middle',fill:'#b7dc84','font-size':15,'font-family':'monospace'});const entry=D.roads.concat(D.items).find(e=>e.id===p.circuit);V.text(g,x,y+67,entry.from?V.code(entry.from)+' ↔ '+V.code(entry.to):entry.name,{'text-anchor':'middle',fill:'#bec5b5','font-size':12});
      }else if(p.kind==='button'){
        const{x,y}=p.position;V.svg('rect',{x,y,width:92,height:75,rx:7,fill:'#373b38',stroke:'#929a8d','stroke-width':3},g);V.svg('circle',{cx:x+46,cy:y+37,r:21,fill:'#151b17',stroke:'#696e63','stroke-width':3},g);p.pins.forEach((pin,i)=>add(p.id,pin,x+(i%2?100:-8),y+(i<2?12:62),g));V.text(g,x+46,y+100,p.name,{'text-anchor':'middle',fill:'#d1d8c4','font-size':14});V.text(g,x+46,y+119,'A5 ≈ '+D.buttons.find(b=>b.id===p.id).reading,{'text-anchor':'middle',fill:'#889b7d','font-size':11});
      }else if(p.kind==='lcd'){
        V.svg('rect',{x:380,y:90,width:720,height:120,rx:6,fill:'#28573e',stroke:'#729b62','stroke-width':3},g);V.svg('rect',{x:422,y:108,width:636,height:67,rx:3,fill:'#a8ba60'},g);V.text(g,740,149,'PHYSICAL LCD — UNUSED',{'text-anchor':'middle','font-family':'monospace',fill:'#36492b','font-size':23});p.pins.forEach((pin,i)=>{add(p.id,pin,407+i*44,205,g);V.text(g,407+i*44,228,pin,{'text-anchor':'middle','font-size':10,fill:'#b1baaa'});});
      }else if(p.kind==='buzzer'){
        const{x,y}=p.position;V.svg('circle',{cx:x,cy:y,r:37,fill:'#1d231f',stroke:'#737e70','stroke-width':3},g);V.svg('circle',{cx:x,cy:y,r:7,fill:'#050706'},g);add(p.id,'+',x-15,y+43,g);add(p.id,'−',x+15,y+43,g);V.text(g,x,y+68,'PIEZO / PROPOSED',{'text-anchor':'middle',fill:'#afb8a3','font-size':12});
      }else if(p.kind==='sensor'){
        const{x,y}=p.position;V.svg('rect',{x,y,width:125,height:78,rx:6,fill:'#7c4748',stroke:'#b87772','stroke-width':2},g);V.svg('circle',{cx:x+32,cy:y+31,r:19,fill:'#b4b6ad',stroke:'#4b5951','stroke-width':3},g);p.pins.forEach((pin,i)=>{add(p.id,pin,x+14+i*45,y+87,g);V.text(g,x+14+i*45,y+106,pin,{'text-anchor':'middle',fill:'#bbc2b1','font-size':11});});V.text(g,x+62,y+130,'SOUND / PROPOSED',{'text-anchor':'middle',fill:'#afb8a3','font-size':12});
      }
      const title=V.svg('title',{},g);title.textContent=p.name;const related=rows().find(w=>w.circuit===(p.circuit||p.id));if(related){g.setAttribute('tabindex','0');g.setAttribute('role','button');g.setAttribute('aria-label',p.name+' circuit');const show=()=>this.highlight(p.circuit||p.id,related);g.onmouseenter=g.onfocus=g.onclick=show;g.onmouseleave=g.onblur=()=>this.highlight(null);g.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();show();}};}
    });
    const wires=V.svg('g',{class:'netlist-wires'},svg);rows().forEach(w=>{
      const a=this.anchors[w.from.part+':'+w.from.pin],b=this.anchors[w.to.part+':'+w.to.pin];if(!a||!b)return;const bend=Math.max(30,Math.abs(a.y-b.y)*.4);const path=V.svg('path',{d:'M'+a.x+','+a.y+' C'+a.x+','+(a.y+bend)+' '+b.x+','+(b.y-bend)+' '+b.x+','+b.y,stroke:w.color,'stroke-width':2.5,fill:'none',class:'net-wire','data-wire':w.id,'data-circuit':w.circuit,'data-group':w.group,tabindex:0,role:'button','aria-label':w.id+': '+endpointName(w.from)+' to '+endpointName(w.to)},wires);
      const show=()=>this.highlight(w.circuit,w);path.onmouseenter=path.onfocus=path.onclick=show;path.onmouseleave=()=>this.highlight(null);path.onblur=()=>this.highlight(null);path.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();show();}};const t=V.svg('title',{},path);t.textContent=w.description||endpointName(w.from)+' → '+endpointName(w.to);
    });
    V.text(svg,390,794,'ROAD INDICATORS',{'font-size':17,fill:'#829476','font-family':'monospace'});V.text(svg,390,932,'SUPPLY INDICATORS',{'font-size':17,fill:'#829476','font-family':'monospace'});
    const used=new Set(),errors=[];parts.filter(p=>p.holes).forEach(p=>p.holes.forEach(h=>{if(used.has(h))errors.push('Occupied hole '+h);used.add(h);}));rows().forEach(w=>[w.from,w.to].forEach(e=>{if(!this.anchors[e.part+':'+e.pin])errors.push('Missing anchor '+e.part+':'+e.pin);if(e.hole){if(used.has(e.hole))errors.push('Occupied wire hole '+e.hole);used.add(e.hole);}}));this.errors=errors;
    this.host.querySelector('#board-validation').textContent=errors.length?'Netlist check: '+errors.join('; '):'✓ Netlist verified: '+rows().length+' wires · every pin represented · no hole occupied twice in this profile.';this.filter();this.update(this.live);
  };
  B.highlight=function(circuit,wire){if(!this.svg)return;this.svg.querySelectorAll('[data-circuit]').forEach(el=>{el.classList.toggle('wire-focus',!!circuit&&el.dataset.circuit===circuit);el.classList.toggle('wire-dim',!!circuit&&el.dataset.circuit!==circuit);});if(wire){const related=rows().filter(w=>w.circuit===circuit),resistors=D.hardware.parts.filter(p=>p.circuit===circuit&&p.kind==='resistor');this.host.querySelector('#wire-tooltip').textContent=wire.id+' · '+(wire.description||endpointName(wire.from)+' → '+endpointName(wire.to))+' | Circuit: '+related.map(w=>endpointName(w.from)+' → '+endpointName(w.to)).concat(resistors.map(p=>p.name+' at '+p.holes.join(' ↔ '))).join(' · ');}else this.host.querySelector('#wire-tooltip').textContent='Hover or focus a wire to follow its circuit. LED colours mirror the browser animation.';};
  B.filter=function(){if(!this.svg)return;this.svg.querySelectorAll('[data-group]').forEach(el=>el.classList.toggle('filtered-out',this.group!=='all'&&el.dataset.group!==this.group));this.host.querySelectorAll('[data-board-group]').forEach(el=>el.classList.toggle('active',el.dataset.boardGroup===this.group));};
  B.visibleWires=function(){return rows().filter(w=>(this.group==='all'||w.group===this.group)&&[w.id,endpointName(w.from),endpointName(w.to),w.net,w.status].join(' ').toLowerCase().includes(this.search));};
  B.list=function(){this.host.querySelector('#wire-rows').innerHTML=this.visibleWires().map(w=>'<tr tabindex="0" data-list-wire="'+w.id+'"><td>'+w.id+'</td><td>'+V.escape(endpointName(w.from))+'</td><td>'+V.escape(endpointName(w.to))+'</td><td><span style="color:'+w.color+'">●</span> '+w.net+'<small>'+w.status+'</small></td></tr>').join('');this.host.querySelectorAll('[data-list-wire]').forEach(el=>{const w=D.hardware.netlist.find(w=>w.id===el.dataset.listWire);el.onmouseenter=el.onfocus=()=>this.highlight(w.circuit,w);el.onmouseleave=el.onblur=()=>this.highlight(null);});};
  B.build=function(){const group=groups[this.step],wires=rows().filter(w=>w.group===group);this.host.querySelector('#build-count').textContent=(this.step+1)+' / '+groups.length;this.host.querySelector('#build-title').textContent=group[0].toUpperCase()+group.slice(1);this.host.querySelector('#build-back').disabled=this.step===0;this.host.querySelector('#build-next').disabled=this.step===groups.length-1;const notes={power:'Unplug USB before changing wiring. Bridge split rails if your breadboard rails are split.',roads:'Each road LED has its own 220Ω resistor. A = long positive leg; K = short negative leg.',supplies:'One indicator per supply type. The whole-item Knapsack lights the selected types.',buttons:'Three 220Ω resistors form the shared A5 ladder. Button legs A and D are diagonally opposite. Idle ≈1023; press ≈0 / 512 / 682.',lcd:'Archived wiring only. The current project uses a virtual website LCD; do not reinstall this circuit.',buzzer:'Optional browser audio is functional. A physical piezo on D2 is proposed and needs a firmware change.',sensor:'CLAP simulates detection. A physical digital sound sensor on D3 is proposed and needs a firmware change.'};this.host.querySelector('#build-note').textContent=notes[group];const resistors=D.hardware.parts.filter(p=>p.group===group&&p.holes&&D.hardware.profiles[this.profile].includes(p.status));this.host.querySelector('#build-wires').innerHTML=resistors.map(p=>'<li>'+V.escape(p.name+': '+p.holes.join(' ↔ '))+'</li>').concat(wires.map(w=>'<li>'+V.escape(w.description||endpointName(w.from)+' → '+endpointName(w.to))+'</li>')).join('')||'<li>Not included in this hardware profile.</li>';};
  B.update=function(state){this.live=state;if(this.host&&this.host.isConnected&&this.svg)this.svg.querySelectorAll('[data-led]').forEach(el=>el.classList.toggle('on',this.isLive&&((state.activeRoads||[]).includes(el.dataset.led)||(state.supplies||[]).includes(el.dataset.led))));};
  root.SXBreadboard=B;
})(window);
```

## js/data.js

```javascript
(function (root) {
  'use strict';
  const nodes = [
    {id:'zz',name:'Zombie Zone',code:'ZZ',x:180,y:155,type:'nest',color:'#c34e58'},
    {id:'hos',name:'Hospital',code:'HOS',x:495,y:155,type:'hospital',color:'#77bfc1'},
    {id:'pol',name:'Police Station',alias:'Safe House',code:'POL',x:810,y:155,type:'police',color:'#739acf'},
    {id:'wpn',name:'Weapon Shop',alias:'Weapon House',code:'WPN',x:840,y:360,type:'weapon',color:'#ba925a'},
    {id:'shp',name:'Shop',alias:'Store',code:'SHP',x:280,y:360,type:'shop',color:'#d2a55f'},
    {id:'sch',name:'School',code:'SCH',x:180,y:595,type:'school',color:'#7cba87'},
    {id:'fac',name:'Factory',code:'FAC',x:495,y:595,type:'factory',color:'#999bab'},
    {id:'sup',name:'Supplies',code:'SUP',x:810,y:595,type:'supplies',color:'#a5b864'}
  ];
  const roads = [
    {id:'r1',from:'zz',to:'hos',weight:4,pin:'D6',resistor:['c5','c10'],drive:'a5',anode:'e10'},
    {id:'r2',from:'hos',to:'pol',weight:8,pin:'D7',resistor:['c12','c17'],drive:'a12',anode:'e17'},
    {id:'r3',from:'pol',to:'wpn',weight:7,pin:'D8',resistor:['c19','c24'],drive:'a19',anode:'e24'},
    {id:'r4',from:'zz',to:'shp',weight:3,pin:'D9',resistor:['c26','c31'],drive:'a26',anode:'e31'},
    {id:'r5',from:'shp',to:'sch',weight:5,pin:'D10',resistor:['c33','c38'],drive:'a33',anode:'e38'},
    {id:'r6',from:'sch',to:'fac',weight:6,pin:'A0',resistor:['c40','c45'],drive:'a40',anode:'e45'},
    {id:'r7',from:'fac',to:'sup',weight:3,pin:'D13',resistor:['h19','h24'],drive:'f19',anode:'j24'}
  ];
  const items = [
    {id:'food',name:'Food',weight:5,profit:120,pin:'A1',resistor:['c47','c52'],drive:'a47',anode:'e52',icon:'▣'},
    {id:'water',name:'Water',weight:3,profit:100,pin:'A2',resistor:['c54','c59'],drive:'a54',anode:'e59',icon:'◉'},
    {id:'ammo',name:'Ammunition',short:'AMMO',weight:10,profit:150,pin:'A3',resistor:['h5','h10'],drive:'f5',anode:'j10',icon:'▥'},
    {id:'meds',name:'Meds',weight:3,profit:100,pin:'A4',resistor:['h12','h17'],drive:'f12',anode:'j17',icon:'✚'}
  ];
  const buttons = [
    {id:'btn-d',name:'Dijkstra',mode:'dijkstra',tap:'j40',ground:'top-40',reading:0},
    {id:'btn-k',name:'Knapsack',mode:'knapsack',tap:'j45',ground:'top-41',reading:512},
    {id:'btn-t',name:'Zombie TSP',mode:'tsp',tap:'j50',ground:'top-42',reading:682}
  ];
  const parts = [
    {id:'uno',kind:'uno',name:'Arduino Uno',group:'power',status:'current',pins:['5V','GND','D0','D1','D2','D3','D4','D5','D6','D7','D8','D9','D10','D11','D12','D13','A0','A1','A2','A3','A4','A5']},
    {id:'breadboard',kind:'breadboard',name:'Full-size breadboard',group:'power',status:'current',pins:[]},
    {id:'lcd',kind:'lcd',name:'16×2 LCD (archived, unused)',group:'lcd',status:'archived',pins:['1 VSS','2 VDD','3 V0','4 RS','5 RW','6 E','7 D0','8 D1','9 D2','10 D3','11 D4','12 D5','13 D6','14 D7','15 A','16 K']},
    {id:'buzzer',kind:'buzzer',name:'Passive piezo buzzer (proposed)',group:'buzzer',status:'proposed',pins:['+','−'],position:{x:1585,y:665}},
    {id:'sensor',kind:'sensor',name:'Digital sound sensor (proposed)',group:'sensor',status:'proposed',pins:['VCC','GND','DO'],position:{x:1530,y:785}}
  ];
  const netlist = [];
  let serial = 0;
  function endpoint(part,pin,hole) { return {part,pin,hole:hole || null}; }
  function wire(group,circuit,from,to,net,color,status,description) {
    netlist.push({id:'w'+(++serial),group,circuit,from,to,net,color,status:status || 'current',description:description || '',colorVerified:false});
  }
  function hole(h) { return endpoint('breadboard',h,h); }
  function pin(p,n) { return endpoint(p,n); }
  const color = {power:'#f16b70',ground:'#778aa8',signal:'#f8c46b',led:'#a8df83',lcd:'#b9a2ee',sensor:'#65cbd0'};
  wire('power','power',pin('uno','5V'),hole('top+2'),'5V',color.power);
  wire('power','power',pin('uno','GND'),hole('top-2'),'GND',color.ground);
  wire('power','power',hole('top+29'),hole('top+35'),'5V',color.power,'current','Bridge the split red rail');
  wire('power','power',hole('top-29'),hole('top-35'),'GND',color.ground,'current','Bridge the split blue rail');
  roads.concat(items).forEach(function (entry,index) {
    const group = index < roads.length ? 'roads' : 'supplies';
    parts.push({id:'res-'+entry.id,kind:'resistor',name:'220Ω resistor',group,status:'current',circuit:entry.id,pins:['1','2'],holes:entry.resistor});
    parts.push({id:'led-'+entry.id,kind:'led',name:index < roads.length ? nodes.find(n=>n.id===entry.from).name+' ↔ '+nodes.find(n=>n.id===entry.to).name : entry.name,group,status:'current',circuit:entry.id,pins:['A','K'],position:{x:index<7?390+index*145:490+(index-7)*235,y:index<7?850:980},pinLabel:entry.pin});
    wire(group,entry.id,pin('uno',entry.pin),hole(entry.drive),entry.id+'-drive',color.signal,'current','M2M: Uno '+entry.pin+' → '+entry.drive);
    wire(group,entry.id,hole(entry.anode),pin('led-'+entry.id,'A'),entry.id+'-anode',color.led,'current','M2F: male '+entry.anode+' → female on LED long leg');
    wire(group,entry.id,pin('led-'+entry.id,'K'),hole('top-'+(5+index)),'GND',color.ground,'current','M2F: LED short leg → blue GND rail');
  });
  [['ladder1',['h35','h40']],['ladder2',['i40','i45']],['ladder3',['h45','h50']]].forEach(function (r) {
    parts.push({id:r[0],kind:'resistor',name:'220Ω button resistor',group:'buttons',status:'current',circuit:'buttons',pins:['1','2'],holes:r[1]});
  });
  wire('buttons','buttons',hole('top+40'),hole('f35'),'5V',color.power);
  wire('buttons','buttons',pin('uno','A5'),hole('f40'),'button-tap-D',color.signal);
  buttons.forEach(function (b,i) {
    parts.push({id:b.id,kind:'button',name:b.name,group:'buttons',status:'current',circuit:'buttons',pins:['A','B','C','D'],position:{x:1570,y:185+i*140}});
    wire('buttons','buttons',hole(b.tap),pin(b.id,'A'),'button-tap-'+i,color.signal,'current','Use diagonally opposite button legs A and D');
    wire('buttons','buttons',pin(b.id,'D'),hole(b.ground),'GND',color.ground);
  });
  const lcdConnections = [[1,'VSS','top-20'],[2,'VDD','top+20'],[3,'V0','top-23'],[4,'RS','D12'],[5,'RW','top-21'],[6,'E','D11'],[11,'D4','D5'],[12,'D5','D4'],[13,'D6','D3'],[14,'D7','D2'],[15,'A','j31'],[16,'K','top-22']];
  lcdConnections.forEach(function (c) {
    const target = /^D/.test(c[2]) ? pin('uno',c[2]) : hole(c[2]);
    wire('lcd','lcd',pin('lcd',c[0]+' '+c[1]),target,c[1]==='VSS'||c[1]==='RW'||c[1]==='K'||c[1]==='V0'?'GND':c[1]==='VDD'?'5V':'LCD-'+c[1],color.lcd,'archived');
  });
  parts.push({id:'lcd-res',kind:'resistor',name:'220Ω LCD backlight resistor',group:'lcd',status:'archived',circuit:'lcd',pins:['1','2'],holes:['h26','h31']});
  wire('lcd','lcd',hole('top+21'),hole('f26'),'LCD-backlight',color.power,'archived');
  wire('buzzer','buzzer',pin('uno','D2'),pin('buzzer','+'),'piezo-signal',color.signal,'proposed','Proposed D2; not enabled in the current firmware');
  wire('buzzer','buzzer',pin('buzzer','−'),hole('top-50'),'GND',color.ground,'proposed');
  wire('sensor','sensor',pin('uno','D3'),pin('sensor','DO'),'sound-digital',color.sensor,'proposed','Proposed D3; not enabled in the current firmware');
  wire('sensor','sensor',pin('sensor','VCC'),hole('top+50'),'5V',color.power,'proposed');
  wire('sensor','sensor',pin('sensor','GND'),hole('top-51'),'GND',color.ground,'proposed');
  const data = {
    title:'SurviveX',nodes,roads,items,buttons,source:'sch',safeHouse:'pol',supplies:'sup',capacity:18,boardChosen:['food','water','ammo'],
    map:{width:1040,height:750,landmarks:[{id:'statue',name:'Statue',x:530,y:360,type:'statue',decorative:true},{id:'roadblock',name:'Roadblock',x:840,y:470,type:'barrier',decorative:true}]},
    repo:'https://github.com/Swastika8/DAA_SurviveX_Model.git',
    author:{name:'Swastika Sinha',class:'TY IT A',college:'PCCoE Pune',university:'Savitribai Phule Pune University',subject:'DAA'},
    hardware:{parts,netlist,colors:color,columnCount:63,baudRate:9600,lcdConnections,profiles:{current:['current'],archived:['current','archived'],proposed:['current','proposed']},
      notes:['Column numbers always come from the top A–E labels, for BOTH halves. A40–E40 and F40–J40 are separate groups.',
        'Wire colours and exact power-rail holes are suggested: actual colours and those rail holes were never recorded.',
        'The physical LCD is unused. Its earlier wiring is shown only in the archived LCD profile.',
        'Buzzer D2 and sensor D3 are proposed, not installed or enabled. They replace archived LCD signals, so never combine those profiles.',
        'CLAP and the sound indicator are browser simulations. The installed hardware uses three A5 buttons.',
        'A temporary potentiometer probe at G40 is NOT part of this netlist. Remove it before using the buttons.']},
    complexities:{dijkstra:'O(V²)',knapsack:'O(nW)',tsp:'O(n² · 2ⁿ)'},
    modes:[{id:'dijkstra',name:'Dijkstra',subtitle:'Find a safe route',icon:'↗',command:'D'},{id:'knapsack',name:'Knapsack',subtitle:'Pack for survival',icon:'▣',command:'K'},{id:'tsp',name:'Zombie TSP',subtitle:'Scout every location',icon:'☣',command:'T'}]
  };
  root.SurviveXData = data;
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
})(typeof globalThis !== 'undefined' ? globalThis : window);
```

## js/hardware.js

```javascript
(function(root){
  'use strict';const V=root.SXView,D=root.SurviveXData;
  // A compact 5×8 font: eight rows, with five bits per row, MSB on the left.
  const font={
    ' ':[0,0,0,0,0,0,0,0],A:[14,17,17,31,17,17,17,0],B:[30,17,17,30,17,17,30,0],C:[14,17,16,16,16,17,14,0],D:[30,17,17,17,17,17,30,0],E:[31,16,16,30,16,16,31,0],F:[31,16,16,30,16,16,16,0],G:[14,17,16,23,17,17,15,0],H:[17,17,17,31,17,17,17,0],I:[14,4,4,4,4,4,14,0],J:[7,2,2,2,18,18,12,0],K:[17,18,20,24,20,18,17,0],L:[16,16,16,16,16,16,31,0],M:[17,27,21,21,17,17,17,0],N:[17,25,21,19,17,17,17,0],O:[14,17,17,17,17,17,14,0],P:[30,17,17,30,16,16,16,0],Q:[14,17,17,17,21,18,13,0],R:[30,17,17,30,20,18,17,0],S:[15,16,16,14,1,1,30,0],T:[31,4,4,4,4,4,4,0],U:[17,17,17,17,17,17,14,0],V:[17,17,17,17,17,10,4,0],W:[17,17,17,21,21,21,10,0],X:[17,17,10,4,10,17,17,0],Y:[17,17,10,4,4,4,4,0],Z:[31,1,2,4,8,16,31,0],
    '0':[14,17,19,21,25,17,14,0],'1':[4,12,4,4,4,4,14,0],'2':[14,17,1,2,4,8,31,0],'3':[30,1,1,14,1,1,30,0],'4':[2,6,10,18,31,2,2,0],'5':[31,16,16,30,1,1,30,0],'6':[14,16,16,30,17,17,14,0],'7':[31,1,2,4,8,8,8,0],'8':[14,17,17,14,17,17,14,0],'9':[14,17,17,15,1,1,14,0],
    ':':[0,4,4,0,4,4,0,0],'-':[0,0,0,31,0,0,0,0],'.':[0,0,0,0,0,6,6,0],'/':[1,2,2,4,8,8,16,0],'>':[16,8,4,2,4,8,16,0],'+':[0,4,4,31,4,4,0,0],'?':[14,17,1,2,4,0,4,0],'!':[4,4,4,4,4,0,4,0],'%':[17,2,4,4,8,16,17,0],'=':[0,0,31,0,31,0,0,0],'_':[0,0,0,0,0,0,31,0],'(':[2,4,8,8,8,4,2,0],')':[8,4,2,2,2,4,8,0]
  };
  const H={host:null,lines:['SURVIVEX READY','PRESS A BUTTON'],log:[],muted:true,contrast:.85,activeRoads:[],supplies:[],raf:0,lastDraw:'',started:0};
  H.render=function(host){
    this.host=host;
    host.innerHTML='<div class="panel-heading"><span class="eyebrow">VIRTUAL HARDWARE</span><span class="mini-status">SIMULATION</span></div><div class="device-frame"><div class="device-brand">SURVIVEX <span>UNO / 16×2</span></div><div class="lcd-mount"></div><label class="contrast-control">Contrast <input type="range" min="20" max="100" value="85" aria-label="Virtual LCD contrast"><span>VIRTUAL</span></label><div class="device-leds"><div class="eyebrow">ROAD OUTPUTS</div><div class="led-bank road-bank"></div><div class="eyebrow">SUPPLY OUTPUTS</div><div class="led-bank supply-bank"></div></div><div class="device-status"><span><i class="buzzer-dot"></i> BUZZER <b>VIRTUAL</b></span><label><input type="checkbox" class="sound-toggle"> Enable sound</label></div><div class="decor-leds" aria-hidden="true">'+Array.from({length:18},(_,i)=>'<i style="--delay:'+i*.08+'s" class="decor-'+i%3+'"></i>').join('')+'</div></div><details class="serial-panel" open><summary><span>Serial monitor</span><span>9600 BAUD</span></summary><pre aria-label="Serial monitor log"></pre><div class="serial-actions"><button class="button tiny" data-serial-clear>Clear</button><button class="button tiny" data-serial-copy>Copy log</button></div></details>';
    const mount=host.querySelector('.lcd-mount'),svg=V.svg('svg',{viewBox:'0 0 560 215',role:'img','aria-label':'Virtual 16 by 2 character LCD',class:'lcd-svg'},mount);
    V.svg('rect',{x:4,y:6,width:552,height:202,rx:7,fill:'#286240',stroke:'#79a976','stroke-width':2},svg);
    [[20,20],[540,20],[20,191],[540,191]].forEach(([cx,cy])=>{V.svg('circle',{cx,cy,r:6,fill:'#121a14',stroke:'#b6bfb0','stroke-width':2},svg);});
    V.svg('rect',{x:28,y:28,width:504,height:113,rx:5,fill:'#111c14',stroke:'#b0b6a6','stroke-width':5},svg);
    V.svg('rect',{x:37,y:37,width:486,height:95,rx:2,fill:'#b0c752',class:'lcd-backlight'},svg);
    this.dots=[];
    for(let row=0;row<2;row++)for(let col=0;col<16;col++)for(let y=0;y<8;y++)for(let x=0;x<5;x++){
      const dot=V.svg('rect',{x:47+col*29+x*4.2,y:45+row*41+y*4.2,width:3.1,height:3.1,rx:'.3',fill:'#17281c',opacity:'.12'},svg);this.dots.push(dot);
    }
    this.cursor=V.svg('rect',{x:47,y:117,width:21,height:3,fill:'#18371d',class:'lcd-cursor'},svg);
    D.hardware.parts.find(p=>p.id==='lcd').pins.forEach((p,i)=>{V.svg('rect',{x:54+i*29,y:172,width:7,height:26,fill:'#c4b37e',stroke:'#565640'},svg);V.text(svg,58+i*29,161,p.split(' ').slice(1).join(' '),{'font-size':9,'text-anchor':'middle',fill:'#d3e2c2','font-family':'monospace'});});
    V.text(svg,280,202,'HD44780  ·  16-PIN PARALLEL HEADER',{'font-size':8,'text-anchor':'middle',fill:'#c8d5b7','font-family':'monospace'});
    function bank(selector,entries){host.querySelector(selector).innerHTML=entries.map(e=>'<span class="output-led" data-output="'+e.id+'" title="'+V.escape(e.name||V.name(e.from)+' ↔ '+V.name(e.to))+'"><i></i><b>'+e.pin+'</b><small>'+V.escape(e.short||e.name||e.id.toUpperCase())+'</small></span>').join('');}
    bank('.road-bank',D.roads);bank('.supply-bank',D.items);
    const contrast=host.querySelector('.contrast-control input');contrast.value=Math.round(this.contrast*100);const knob=document.createElement('button');knob.type='button';knob.className='contrast-knob';knob.setAttribute('aria-label','Rotate virtual contrast knob');knob.innerHTML='<i></i>';contrast.parentElement.before(knob);const turn=()=>{knob.style.setProperty('--angle',(-120+this.contrast*240)+'deg');knob.setAttribute('aria-valuetext','Contrast '+Math.round(this.contrast*100)+' percent');};turn();knob.onclick=()=>{this.contrast=this.contrast>=.99?.2:Math.min(1,this.contrast+.1);contrast.value=Math.round(this.contrast*100);this.lastDraw='';turn();};contrast.addEventListener('input',e=>{this.contrast=+e.target.value/100;this.lastDraw='';turn();});
    host.querySelector('.sound-toggle').checked=!this.muted;
    host.querySelector('.sound-toggle').addEventListener('change',e=>{this.muted=!e.target.checked;if(!this.muted){const Audio=root.AudioContext||root.webkitAudioContext;if(!Audio){this.muted=true;e.target.checked=false;V.toast('Web Audio is unavailable in this browser.');return;}this.audio=this.audio||new Audio();this.audio.resume().catch(()=>V.toast('Click Enable sound again to activate audio.'));}});
    host.querySelector('[data-serial-clear]').addEventListener('click',()=>{this.log=[];this.paintLog();});
    host.querySelector('[data-serial-copy]').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(this.log.join('\n'));V.toast('Serial log copied.');}catch(e){V.download('survivex-serial.txt',this.log.join('\n'));}});
    this.lastDraw='';this.started=performance.now();this.paintLog();this.update({activeRoads:this.activeRoads,supplies:this.supplies});this.start();
  };
  H.setText=function(a,b){this.lines=[String(a).toUpperCase(),String(b).toUpperCase()];this.started=performance.now();this.lastDraw='';};
  H.tick=function(now){
    if(!this.host||!this.host.isConnected)return;
    const elapsed=now-this.started,reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const strings=this.lines.map(line=>{
      const typed=reduced?line:line.slice(0,Math.max(0,Math.floor(elapsed/28)));
      if(typed.length<=16)return typed.padEnd(16,' ');
      const shift=Math.max(0,Math.floor((elapsed-line.length*28-1400)/500))%(line.length+4);
      return (typed+'    '+typed).slice(shift,shift+16).padEnd(16,' ');
    });
    const signature=strings.join('|')+'@'+this.contrast;
    if(signature!==this.lastDraw){
      this.lastDraw=signature;
      for(let row=0;row<2;row++)for(let col=0;col<16;col++){
        const glyph=font[strings[row][col]]||font['?'];
        for(let y=0;y<8;y++)for(let x=0;x<5;x++)this.dots[((row*16+col)*8+y)*5+x].setAttribute('opacity',glyph[y]&(1<<(4-x))?this.contrast:'.10');
      }
      this.host.querySelector('.lcd-svg').setAttribute('aria-label','Virtual LCD: '+this.lines.join('; '));
      this.cursor.setAttribute('x',47+Math.min(15,Math.floor(elapsed/28)%16)*29);
    }
  };
  H.start=function(){cancelAnimationFrame(this.raf);const loop=now=>{if(document.hidden||!this.host||!this.host.isConnected)return;this.tick(now);this.raf=requestAnimationFrame(loop);};this.raf=requestAnimationFrame(loop);};
  H.update=function(state){this.activeRoads=state.activeRoads||[];this.supplies=state.supplies||[];if(this.host&&this.host.isConnected){this.host.querySelectorAll('[data-output]').forEach(el=>el.classList.toggle('on',this.activeRoads.includes(el.dataset.output)||this.supplies.includes(el.dataset.output)));this.host.querySelector('.device-frame').classList.toggle('touring',state.mode==='tsp');}};
  H.write=function(message,source){const time=new Date().toLocaleTimeString('en-GB');this.log.push('['+time+'] '+(source||'SIM')+'  '+message);if(this.log.length>70)this.log.shift();this.paintLog();};
  H.paintLog=function(){if(this.host&&this.host.isConnected){const p=this.host.querySelector('pre');p.textContent=this.log.join('\n')||'Ready. Browser results are marked SIM.\nConnected board output is marked UNO.';p.scrollTop=p.scrollHeight;}};
  H.beep=function(){if(this.muted||!this.audio)return;const o=this.audio.createOscillator(),gain=this.audio.createGain();o.frequency.value=620;gain.gain.setValueAtTime(.035,this.audio.currentTime);gain.gain.exponentialRampToValueAtTime(.001,this.audio.currentTime+.12);o.connect(gain);gain.connect(this.audio.destination);o.start();o.stop(this.audio.currentTime+.13);};
  document.addEventListener('visibilitychange',()=>{if(document.hidden)cancelAnimationFrame(H.raf);else H.start();});
  root.SXHardware=H;
})(window);
```

## js/map.js

```javascript
(function(root){
  'use strict';const V=root.SXView,D=root.SurviveXData;
  function building(g,n){
    const x=n.x,y=n.y,c=n.color;
    // Layered vector shapes echo the foam model: raised base, side wall,
    // roof lip, warm windows and a unique landmark for each location.
    function rect(dx,dy,w,h,fill,extra){return V.svg('rect',Object.assign({x:x+dx,y:y+dy,width:w,height:h,fill,rx:2},extra||{}),g);}
    function line(dx,dy,dx2,dy2,stroke,width){return V.svg('line',{x1:x+dx,y1:y+dy,x2:x+dx2,y2:y+dy2,stroke,'stroke-width':width||2},g);}
    function circle(dx,dy,r,fill,extra){return V.svg('circle',Object.assign({cx:x+dx,cy:y+dy,r,fill},extra||{}),g);}
    V.svg('ellipse',{cx:x+12,cy:y+28,rx:80,ry:25,fill:'#080f13',opacity:'.5'},g);
    rect(-68,8,144,28,'#314947',{rx:8});rect(-68,3,144,25,'#647b68',{rx:7,stroke:'#8c9e80','stroke-width':1});
    V.svg('path',{d:'M'+(x+54)+' '+(y-55)+'l14 11v64l-14 8z',fill:c,style:'filter:brightness(.58)'},g);
    rect(-54,-53,108,74,c,{rx:3});line(-51,-26,50,-26,'#ffffff1a',1);line(-51,-3,50,-3,'#00000015',1);
    V.svg('path',{d:'M'+(x-59)+' '+(y-55)+'l16-20h87l18 20z',fill:c,style:'filter:brightness(.82)'},g);
    V.svg('path',{d:'M'+(x-59)+' '+(y-55)+'h121v7H'+(x-59)+'z',fill:'#e2e5d880'},g);
    line(-38,-71,42,-71,'#ffffff32',2);line(-30,-64,46,-64,'#00000020',2);
    rect(-14,-10,26,32,'#20353c');rect(-8,-5,14,27,'#40595e');circle(4,8,1.3,'#e9d7a0');rect(-21,23,40,5,'#b6b9a5');
    [-41,25].forEach(dx=>{rect(dx,-39,19,22,'#233945');rect(dx+2,-37,15,18,'#f3d88a',{class:'building-window'});line(dx+9,-37,dx+9,-19,'#5a716a',2);line(dx+2,-28,dx+16,-28,'#5a716a',2);rect(dx-2,-16,23,3,'#e8ddbe');});
    // Little planters add the same green flocking seen on the physical model.
    [-54,49].forEach(dx=>{rect(dx-7,15,16,11,'#a18a59');circle(dx,14,8,'#598454');circle(dx-4,11,5,'#79a956');});
    if(n.type==='hospital'){
      rect(-18,-43,36,27,'#e6f0e2',{rx:3});V.svg('path',{d:'M'+(x-5)+' '+(y-39)+'h10v7h7v10h-7v7h-10v-7h-7v-10h7z',fill:'#d46163'},g);
      rect(-28,-70,56,10,'#345b61');V.text(g,x,y-62,'MEDICAL',{'text-anchor':'middle',fill:'#c5e2d4','font-size':7,'letter-spacing':1});
      rect(63,-10,32,17,'#d8e7db');rect(63,-23,23,15,'#d8e7db');rect(68,-19,12,8,'#658c95');rect(78,-7,9,3,'#d76969');rect(81,-10,3,9,'#d76969');circle(70,10,4,'#263b3c');circle(89,10,4,'#263b3c');
    }else if(n.type==='police'){
      V.svg('path',{d:'M'+x+' '+(y-45)+'l17 6-2 20-15 11-15-11-2-20z',fill:'#edf0e5',stroke:'#355579','stroke-width':2},g);V.text(g,x,y-22,'★',{'text-anchor':'middle',fill:'#d7b56d','font-size':20});rect(-16,-82,33,8,'#263a4a');rect(-14,-80,13,5,'#e27775');rect(3,-80,11,5,'#71bddd');
      [-75,81].forEach(dx=>{rect(dx,-7,6,30,'#678195');rect(dx-3,-12,12,9,'#c8e9ab');});
    }else if(n.type==='shop'){
      rect(-57,-29,115,18,'#e9dbc0');for(let i=0;i<9;i++){rect(-57+i*13,-29,13,18,i%2?'#f7e9cf':'#d46c70');V.svg('path',{d:'M'+(x-57+i*13)+' '+(y-11)+'q6 9 13 0',fill:i%2?'#e0d0ab':'#bd565d'},g);}rect(-30,-60,60,14,'#f2d4a1');V.text(g,x,y-50,'MARKET',{'text-anchor':'middle',fill:'#765540','font-size':8,'letter-spacing':1});rect(61,3,25,21,'#856447');rect(63,-1,21,7,'#84a958');circle(70,-2,4,'#c99560');circle(79,-3,4,'#d7ac65');
    }else if(n.type==='factory'){
      rect(-43,-114,18,40,'#8f7882');rect(-45,-116,22,7,'#d0a699');rect(22,-96,17,22,'#8f7882');rect(20,-99,21,7,'#d0a699');[-42,-25].forEach(dx=>line(dx,-80,dx,-106,'#b59692',2));circle(-33,-137,14,'#aec0b2',{opacity:.25,class:'chimney-smoke'});circle(-26,-151,11,'#aec0b2',{opacity:.14,class:'chimney-smoke'});rect(-25,-46,49,14,'#6a616c');V.text(g,x,y-36,'INDUSTRIAL',{'text-anchor':'middle',fill:'#ecded4','font-size':6});[65,84].forEach(dx=>{rect(dx,0,13,22,'#b6654f');line(dx,5,dx+13,5,'#422f2a');line(dx,16,dx+13,16,'#422f2a');});
    }else if(n.type==='school'){
      rect(-25,-72,50,15,'#f1dcac');V.text(g,x,y-62,'SCHOOL',{'text-anchor':'middle',fill:'#406b56','font-size':8,'letter-spacing':1});circle(0,-35,14,'#efe7cb',{stroke:'#477758','stroke-width':2});line(0,-35,0,-43,'#577a61',2);line(0,-35,7,-32,'#577a61',2);rect(-68,-50,4,67,'#bdc9a1');V.svg('path',{d:'M'+(x-64)+' '+(y-49)+'h25l-6 9 6 9h-25z',fill:'#cee990'},g);V.text(g,x-53,y-36,'GO',{'text-anchor':'middle',fill:'#354d28','font-size':7});
    }else if(n.type==='weapon'){
      rect(-29,-45,58,23,'#514743');V.svg('path',{d:'M'+(x-21)+' '+(y-39)+'h36v7h-12v12h-8v-12h-16z',fill:'#e2c097'},g);line(-27,-70,27,-70,'#dfc79a',3);rect(63,-7,24,24,'#776a45');line(63,-5,87,15,'#b9a075',2);line(63,15,87,-5,'#b9a075',2);
    }else if(n.type==='nest'){
      rect(-26,-47,52,28,'#593740');V.text(g,x,y-25,'☣',{'text-anchor':'middle',fill:'#f5b6a1','font-size':24});line(-48,-16,-22,2,'#d9b683',5);line(-47,2,-24,-12,'#a98562',4);line(27,-36,47,-52,'#c6a170',5);rect(-23,-73,45,12,'#2e2630');V.text(g,x,y-64,'QUARANTINE',{'text-anchor':'middle',fill:'#f0a79d','font-size':5.6});
    }else if(n.type==='supplies'){
      rect(-54,-53,108,22,'#7b935b');for(let i=0;i<8;i++)rect(-50+i*13,-51,8,18,'#a8ba74');rect(-29,-75,58,14,'#e2d9a4');V.text(g,x,y-65,'SUPPLY DEPOT',{'text-anchor':'middle',fill:'#4c6240','font-size':6.7});['#ca9d68','#79afbf','#b2a06e','#be7c78'].forEach((color,i)=>{const dx=-40+(i%2)*42,dy=-29+Math.floor(i/2)*27;rect(dx,dy,35,23,color,{stroke:'#52634a'});line(dx+17,dy,dx+17,dy+23,'#eadca8',3);rect(dx+4,dy+8,9,7,'#edf0d6');});
    }
    rect(-80,37,160,31,'#112329',{rx:7,stroke:'#526d62','stroke-width':1.4,class:'node-label'});circle(-65,53,3,n.type==='nest'?'#ed8e82':n.type==='police'?'#94d9de':n.type==='school'?'#c6e88a':'#8bab88');V.text(g,x+5,y+57,n.alias||n.name,{'text-anchor':'middle',fill:'#f5f0de','font-size':15,'font-weight':650});
    rect(32,-89,31,17,'#1c3536',{rx:4,stroke:'#647d66'});V.text(g,x+47,y-77,n.code,{'text-anchor':'middle',fill:'#d1dfb8','font-size':9,'font-family':'monospace'});
  }
  function zombie(g,x,y,cls){
    const z=V.svg('g',{transform:'translate('+x+' '+y+')',class:cls||'ambient-zombie'},g);
    V.svg('circle',{cx:0,cy:-16,r:8,fill:'#a0b286'},z);V.svg('path',{d:'M-7-7h14v19H-7z',fill:'#756b7a'},z);
    V.svg('path',{d:'M-6 10l-4 14 M5 10l8 14 M-6-2l-16 4 M6-2l17-5',stroke:'#a0b286','stroke-width':5,'stroke-linecap':'round'},z);
    V.svg('circle',{cx:-3,cy:-17,r:1.4,fill:'#dd6b71'},z);V.svg('circle',{cx:3,cy:-17,r:1.4,fill:'#dd6b71'},z);return z;
  }
  function landmark(svg,n){
    const g=V.svg('g',{'data-landmark':n.id,role:'img','aria-label':n.name+' — decorative landmark, not an algorithm node'},svg),x=n.x,y=n.y;
    if(n.type==='statue'){
      V.svg('ellipse',{cx:x+5,cy:y+18,rx:58,ry:18,fill:'#142c30',opacity:'.55'},g);V.svg('ellipse',{cx:x,cy:y+9,rx:60,ry:19,fill:'#657d69',stroke:'#a5b397','stroke-width':2},g);V.svg('ellipse',{cx:x,cy:y+5,rx:43,ry:13,fill:'#829585'},g);V.svg('rect',{x:x-18,y:y-18,width:36,height:30,fill:'#bcbda5',stroke:'#808f7d','stroke-width':2},g);V.svg('rect',{x:x-23,y:y-22,width:46,height:8,rx:2,fill:'#d0ccb0'},g);V.svg('circle',{cx:x,cy:y-64,r:10,fill:'#b6c3ae'},g);V.svg('path',{d:'M'+(x-9)+' '+(y-52)+'h18l6 24h-11v7h-9v-7h-10z',fill:'#a7baa7',stroke:'#769389','stroke-width':2},g);V.svg('path',{d:'M'+(x+9)+' '+(y-48)+'l17-13 3-16',fill:'none',stroke:'#a7baa7','stroke-width':7,'stroke-linecap':'round'},g);V.svg('path',{d:'M'+(x+22)+' '+(y-81)+'l7-15 5 15z',fill:'#ebca8a'},g);V.text(g,x,y+49,n.name,{'text-anchor':'middle',fill:'#d5dece','font-size':15,'font-weight':600});V.text(g,x,y+65,'LANDMARK ONLY',{'text-anchor':'middle',fill:'#a6b8a5','font-size':8,'letter-spacing':1});
    }else{
      [-37,37].forEach(dx=>V.svg('path',{d:'M'+(x+dx-4)+' '+(y-12)+'v26h8v-26',fill:'#cbb88c',stroke:'#776c57','stroke-width':2},g));V.svg('rect',{x:x-54,y:y-17,width:108,height:17,rx:2,fill:'#e3ceb0',stroke:'#80594e','stroke-width':2},g);for(let i=0;i<7;i++)V.svg('path',{d:'M'+(x-53+i*16)+' '+(y-16)+'h9l-9 16h-9z',fill:'#c36059'},g);V.svg('circle',{cx:x,cy:y-29,r:13,fill:'#bb5955',stroke:'#e3bd9c','stroke-width':2},g);V.svg('path',{d:'M'+(x-6)+' '+(y-35)+'l12 12 M'+(x+6)+' '+(y-35)+'l-12 12',stroke:'#f5dcc6','stroke-width':3},g);V.text(g,x,y+34,n.name.toUpperCase(),{'text-anchor':'middle',fill:'#efb4a1','font-size':11,'font-weight':650,'letter-spacing':1});
    }
  }
  const MapView={host:null,svg:null,roads:[]};
  MapView.render=function(host,roads,blocked){
    this.host=host;this.roads=roads;host.innerHTML='';
    const width=D.map.width,height=D.map.height,svg=this.svg=V.svg('svg',{viewBox:'0 0 '+width+' '+height,role:'group','aria-label':'City map: '+D.nodes.length+' locations connected by '+roads.length+' weighted roads',class:'city-svg'},host);
    const defs=V.svg('defs',{},svg),pattern=V.svg('pattern',{id:'terrain-grid',width:30,height:30,patternUnits:'userSpaceOnUse'},defs);
    V.svg('path',{d:'M30 0H0V30',fill:'none',stroke:'#273226','stroke-width':'.6',opacity:'.45'},pattern);
    const fogFilter=V.svg('filter',{id:'fog-blur'},defs);V.svg('feGaussianBlur',{stdDeviation:24},fogFilter);
    const ground=V.svg('radialGradient',{id:'ground-light',cx:'.5',cy:'.45',r:'.7'},defs);V.svg('stop',{offset:0,'stop-color':'#3a5440'},ground);V.svg('stop',{offset:1,'stop-color':'#1b3031'},ground);V.svg('rect',{width,height,fill:'url(#ground-light)'},svg);V.svg('rect',{width,height,fill:'url(#terrain-grid)'},svg);
    V.svg('rect',{x:18,y:18,width:width-36,height:height-36,rx:16,fill:'none',stroke:'#577063','stroke-width':1,opacity:'.4'},svg);
    // Terrain details are decoration, never graph edges.
    [[330,270,235,177],[600,260,130,195],[333,476,78,62],[891,270,82,190]].forEach(([x,y,w,h])=>{V.svg('rect',{x,y,width:w,height:h,rx:18,fill:'#486044',opacity:'.42',stroke:'#718767','stroke-width':1},svg);for(let i=0;i<8;i++)V.svg('circle',{cx:x+15+(i*41)%(w-25),cy:y+13+(i*29)%(h-25),r:1.6,fill:'#859269',opacity:'.4'},svg);});
    [[70,95],[110,340],[100,505],[304,305],[438,342],[581,301],[682,411],[710,78],[934,152],[927,476],[938,620],[396,613],[594,639],[664,523]].forEach(([x,y],i)=>{const t=V.svg('g',{},svg);V.svg('ellipse',{cx:x+4,cy:y+23,rx:17,ry:6,fill:'#112628',opacity:'.4'},t);V.svg('rect',{x:x-2,y:y+3,width:5,height:20,fill:'#a19b6e'},t);V.svg('circle',{cx:x,cy:y,r:16,fill:i%2?'#6b9460':'#5e8755'},t);V.svg('circle',{cx:x-8,cy:y+3,r:11,fill:'#7ca066'},t);V.svg('circle',{cx:x+8,cy:y-3,r:11,fill:'#84ab6b'},t);V.svg('circle',{cx:x-4,cy:y-7,r:7,fill:'#a7bf76',opacity:'.6'},t);});
    V.svg('rect',{x:619,y:327,width:46,height:77,rx:7,fill:'#6e7962',stroke:'#929879'},svg);V.svg('rect',{x:625,y:333,width:34,height:65,rx:5,fill:'#4c9294',opacity:'.6'},svg);V.svg('path',{d:'M630 350h24 M630 372h24',stroke:'#a3d4c1','stroke-width':1.5,opacity:'.5'},svg);
    roads.forEach(r=>{
      const a=V.node(r.from),b=V.node(r.to);if(!a||!b)return;
      const g=V.svg('g',{'data-road':r.id,class:'map-road'+((blocked||[]).includes(r.id)?' blocked':'')},svg);
      V.svg('line',{x1:a.x+2,y1:a.y+22,x2:b.x+2,y2:b.y+22,stroke:'#122427','stroke-width':42,'stroke-linecap':'round',opacity:'.4'},g);
      V.svg('line',{x1:a.x,y1:a.y+15,x2:b.x,y2:b.y+15,stroke:'#809180','stroke-width':36,'stroke-linecap':'round'},g);
      V.svg('line',{x1:a.x,y1:a.y+15,x2:b.x,y2:b.y+15,stroke:'#25383c','stroke-width':29,'stroke-linecap':'round',class:'road-fill'},g);
      V.svg('line',{x1:a.x,y1:a.y+15,x2:b.x,y2:b.y+15,stroke:'#d6d2a6','stroke-width':2,'stroke-dasharray':'8 13',class:'road-dashes'},g);
      const mx=(a.x+b.x)/2,my=(a.y+b.y)/2+15;
      V.svg('rect',{x:mx-16,y:my-15,width:32,height:30,rx:9,fill:'#193037',stroke:'#8ea47d','stroke-width':1.6,class:'cost-badge'},g);
      V.text(g,mx,my+6,r.weight,{'text-anchor':'middle',fill:'#fff2c4','font-size':17,'font-weight':700});
    });
    D.nodes.forEach(n=>{const g=V.svg('g',{'data-node':n.id,class:'map-node',tabindex:0,role:'button','aria-label':'Select '+(n.alias||n.name)+' as Dijkstra destination'},svg);building(g,n);g.addEventListener('click',()=>root.SXApp.selectDestination(n.id));g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();root.SXApp.selectDestination(n.id);}});});
    D.map.landmarks.forEach(n=>landmark(svg,n));
    const supply=V.node(D.supplies);V.text(svg,supply.x,supply.y+86,D.items.map(i=>i.short||i.name).join(' · ').toUpperCase(),{'text-anchor':'middle',fill:'#d0d9ae','font-size':9,'letter-spacing':'.4','font-family':'monospace'});
    zombie(svg,100,220);zombie(svg,270,155);zombie(svg,335,465);zombie(svg,930,525);
    const fog=V.svg('g',{class:'fog',opacity:'.16',filter:'url(#fog-blur)','pointer-events':'none'},svg);
    V.svg('ellipse',{cx:300,cy:310,rx:220,ry:30,fill:'#bcc9ba'},fog);V.svg('ellipse',{cx:730,cy:490,rx:210,ry:35,fill:'#bcc9ba'},fog);
    const actor=V.svg('g',{id:'map-actor',class:'map-actor',style:'transform:translate(220px, 610px)'},svg);
    const human=V.svg('g',{class:'human-sprite'},actor);V.svg('circle',{cx:0,cy:-13,r:7,fill:'#e9c69a'},human);V.svg('rect',{x:-6,y:-6,width:12,height:17,rx:3,fill:'#b8ee71'},human);V.svg('path',{d:'M-3 9l-3 13 M3 9l4 13',stroke:'#d4e6bb','stroke-width':4,'stroke-linecap':'round'},human);zombie(actor,0,0,'scout-sprite');
    V.text(svg,32,32,'SECTOR '+String(D.nodes.length).padStart(2,'0')+'  /  CITY MODEL',fillAttrs('#88987b',11));
    V.text(svg,32,height-28,'SCHOOL = START  ·  POLICE STATION = SAFE HOUSE',fillAttrs('#a8b897',11));
    const controls=document.createElement('div');controls.className='map-view-controls';controls.innerHTML='<span>INTERACTIVE DIORAMA</span><button type="button" aria-label="Zoom into city map">+</button><button type="button" aria-label="Zoom out of city map">−</button><button type="button" aria-label="Fit entire city map">Fit</button>';host.appendChild(controls);this.zoom=1;const buttons=controls.querySelectorAll('button');const zoom=()=>{const w=width/this.zoom,h=height/this.zoom;svg.setAttribute('viewBox',[(width-w)/2,(height-h)/2,w,h].join(' '));};buttons[0].onclick=()=>{this.zoom=Math.min(2.5,this.zoom+.25);zoom();};buttons[1].onclick=()=>{this.zoom=Math.max(1,this.zoom-.25);zoom();};buttons[2].onclick=()=>{this.zoom=1;zoom();};
    this.update({activeRoads:[],visited:[],frontier:[],node:D.source,mode:'dijkstra',blocked:blocked||[]});
  };
  function fillAttrs(fill,size){return {fill,'font-size':size,'font-family':'monospace'};}
  MapView.update=function(state){
    if(!this.svg)return;
    this.svg.querySelectorAll('[data-road]').forEach(el=>{el.classList.toggle('active',(state.activeRoads||[]).includes(el.dataset.road));el.classList.toggle('scouted',state.mode==='tsp');el.classList.toggle('blocked',(state.blocked||[]).includes(el.dataset.road));});
    this.svg.querySelectorAll('[data-node]').forEach(el=>{el.classList.toggle('visited',(state.visited||[]).includes(el.dataset.node));el.classList.toggle('frontier',(state.frontier||[]).includes(el.dataset.node));});
    const n=V.node(state.node)||V.node('sch'),actor=this.svg.querySelector('#map-actor');actor.style.transform='translate('+n.x+'px,'+(n.y+24)+'px)';actor.classList.toggle('zombie-mode',state.mode==='tsp');let nest=this.svg.querySelector('#school-nest');if(!nest){nest=V.text(this.svg,V.node(D.source).x,V.node(D.source).y+83,'☣ HORDE RETURN POINT',{'text-anchor':'middle',fill:'#efb0a3','font-size':11,'font-family':'monospace',id:'school-nest'});}nest.style.display=state.mode==='tsp'?'block':'none';
  };
  root.SXMap=MapView;
})(window);
```

## js/utils.js

```javascript
(function(root){
  'use strict';const V=root.SXView=root.SXView||{};
  V.escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  V.node=id=>root.SurviveXData.nodes.find(n=>n.id===id);
  V.name=id=>{const n=V.node(id);return n?(n.alias||n.name):id;};
  V.code=id=>{const n=V.node(id);return n?n.code:id;};
  V.svg=(tag,attributes,parent)=>{const el=document.createElementNS('http://www.w3.org/2000/svg',tag);Object.entries(attributes||{}).forEach(([key,value])=>el.setAttribute(key,value));if(parent)parent.appendChild(el);return el;};
  V.text=(parent,x,y,value,attributes)=>{const el=V.svg('text',Object.assign({x,y},attributes||{}),parent);el.textContent=value;return el;};
  V.number=value=>Number.isFinite(value)?Math.round(value*100)/100:'∞';
  V.toast=function(message){const el=document.getElementById('toast');el.textContent=message;el.classList.add('show');clearTimeout(V.toast.timer);V.toast.timer=setTimeout(()=>el.classList.remove('show'),4500);};
  V.icons={dijkstra:'↗',knapsack:'▣',tsp:'☣',compare:'≋',breadboard:'⌘'};
  V.download=function(name,text){const url=URL.createObjectURL(new Blob([text],{type:'text/plain'}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
})(window);
```

## netlify.toml

```toml
[build]
  publish = "."
```

## package.json

```json
{
  "name": "survivex-daa-model",
  "version": "1.0.0",
  "private": true,
  "description": "A buildless Arduino zombie-city digital twin with real DAA algorithms",
  "scripts": {"test": "node tests/run.js", "start": "node tools/serve.js"}
}
```

## README.md

````markdown
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
````

## tests/run.js

```javascript
'use strict';
const assert=require('node:assert/strict');
const data=require('../js/data.js');
const dijkstra=require('../js/algorithms/dijkstra.js');
const {knapsack,greedy,bruteKnapsack}=require('../js/algorithms/knapsack.js');
const {tsp,bruteTSP}=require('../js/algorithms/tsp.js');
let checks=0;
function test(name,fn){fn();checks++;console.log('PASS '+name);}
test('All seven Dijkstra distances and safe route',()=>{const r=dijkstra(data.nodes,data.roads,'sch','pol');assert.deepEqual(r.distances,{zz:8,hos:12,pol:20,wpn:27,shp:5,sch:0,fac:6,sup:9});assert.deepEqual(r.path,['sch','shp','zz','hos','pol']);});
test('Supplies route and source-to-source',()=>{assert.deepEqual(dijkstra(data.nodes,data.roads,'sch','sup').path,['sch','fac','sup']);assert.equal(dijkstra(data.nodes,data.roads,'sch','sch').cost,0);});
test('Barricade reports NO ROUTE',()=>{const r=dijkstra(data.nodes,data.roads,'sch','pol',['r2']);assert.equal(r.noRoute,true);assert.equal(r.cost,Infinity);assert.deepEqual(r.path,[]);});
test('Dijkstra supports zero weights and rejects negative weights',()=>{const roads=data.roads.map(r=>({...r,weight:r.id==='r5'?0:r.weight}));assert.equal(dijkstra(data.nodes,roads,'sch','pol').cost,15);assert.throws(()=>dijkstra(data.nodes,[{...roads[0],weight:-1}],'sch','pol'));});
test('Knapsack optimum and both tied sets',()=>{const r=knapsack(data.items,18);assert.equal(r.profit,370);assert.equal(r.weight,18);assert.deepEqual(r.chosen.map(i=>i.id),['food','water','ammo']);assert.deepEqual(r.tiedSets.map(s=>s.slice().sort().join(',')).sort(),['ammo,food,meds','ammo,food,water']);});
test('Greedy 320 and fractional 425',()=>{assert.equal(greedy(data.items,18,false).profit,320);assert.equal(greedy(data.items,18,true).profit,425);});
test('DP equals every-subset search for capacities 0–30',()=>{for(let capacity=0;capacity<=30;capacity++){const dp=knapsack(data.items,capacity);assert.equal(dp.profit,bruteKnapsack(data.items,capacity).profit);assert.ok(dp.weight<=capacity);}});
test('Disabled-item scenarios and invalid capacity',()=>{assert.equal(knapsack([],18).profit,0);assert.equal(knapsack(data.items.filter(i=>i.id!=='ammo'),18).profit,320);assert.throws(()=>knapsack(data.items,-1));});
test('TSP cost 72, all places, each road exactly twice',()=>{const r=tsp(data.nodes,data.roads,'sch');assert.equal(r.cost,72);assert.equal(r.tour[0],'sch');assert.equal(r.tour.at(-1),'sch');assert.equal(new Set(r.tour).size,8);assert.equal(r.pathRoads.length,14);data.roads.forEach(road=>assert.equal(r.pathRoads.filter(id=>id===road.id).length,2));assert.equal(r.walk.length,15);});
test('Held-Karp equals all 5040 permutations',()=>{const dp=tsp(data.nodes,data.roads,'sch'),brute=bruteTSP(data.nodes,data.roads,'sch');assert.equal(dp.cost,brute.cost);assert.equal(brute.permutations,5040);assert.ok(brute.ties>1);assert.ok(dp.operations<brute.operations);});
test('Disconnected graph has no TSP tour',()=>assert.equal(tsp(data.nodes,data.roads,'sch',['r6']).noRoute,true));
test('Data has no Statue or invented default road',()=>{assert.equal(data.nodes.length,8);assert.equal(data.roads.length,7);assert.ok(!data.nodes.some(n=>n.id==='statue'));assert.ok(!data.roads.some(r=>[r.from,r.to].includes('wpn')&&[r.from,r.to].includes('fac')));});
test('No shared wire or resistor holes in any physical profile',()=>{Object.values(data.hardware.profiles).forEach(statuses=>{const occupied=new Set();data.hardware.parts.filter(p=>statuses.includes(p.status)&&p.holes).forEach(p=>p.holes.forEach(h=>{assert.ok(!occupied.has(h),'Duplicate resistor hole '+h);occupied.add(h);}));data.hardware.netlist.filter(w=>statuses.includes(w.status)).forEach(w=>[w.from,w.to].forEach(e=>{if(e.hole){assert.ok(!occupied.has(e.hole),'Duplicate wire endpoint '+e.hole);occupied.add(e.hole);}}));});});
test('Every netlist component pin exists',()=>{const parts=new Map(data.hardware.parts.map(p=>[p.id,p]));data.hardware.netlist.forEach(w=>[w.from,w.to].forEach(e=>{assert.ok(parts.has(e.part));if(e.part!=='breadboard')assert.ok(parts.get(e.part).pins.includes(e.pin),e.part+':'+e.pin);}));});
test('Trace snapshots reconstruct the computed solutions',()=>{const d=dijkstra(data.nodes,data.roads,'sch','pol');assert.deepEqual(d.trace.at(-1).distances,d.distances);assert.deepEqual(d.trace.at(-1).activeRoads,d.pathRoads);const k=knapsack(data.items,18);k.trace.filter(t=>t.kind==='cell').forEach(t=>assert.equal(t.value,k.table[t.row][t.col]));assert.deepEqual(k.trace.filter(t=>t.kind==='backtrack'&&t.take).map(t=>t.item).reverse(),k.chosen.map(i=>i.id));const t=tsp(data.nodes,data.roads,'sch');assert.equal(t.states.length,448);assert.deepEqual(t.trace.filter(s=>s.kind==='walk').map(s=>s.edge),t.pathRoads);});
test('What-if cycle and road weights still match brute force',()=>{const changed=data.roads.map(r=>({...r,weight:r.id==='r5'?2:r.weight})).concat({id:'shortcut',from:'sch',to:'pol',weight:3});assert.equal(dijkstra(data.nodes,changed,'sch','pol').cost,3);assert.equal(tsp(data.nodes,changed,'sch').cost,bruteTSP(data.nodes,changed,'sch').cost);});
test('Requested three-row layout keeps Statue decorative',()=>{const node=id=>data.nodes.find(n=>n.id===id);assert.equal(node('zz').y,node('hos').y);assert.equal(node('hos').y,node('pol').y);assert.equal(node('shp').y,node('wpn').y);assert.equal(node('sch').y,node('fac').y);assert.equal(node('fac').y,node('sup').y);assert.ok(data.map.landmarks.find(n=>n.id==='statue').decorative);assert.ok(!data.roads.some(r=>r.from==='statue'||r.to==='statue'));});
console.log('\n'+checks+' checks passed.');
```

## tools/serve.js

```javascript
/* Zero-dependency static preview. Run: node tools/serve.js [port] */
'use strict';
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),port=Number(process.argv[2]||4173);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.json':'application/json','.md':'text/plain; charset=utf-8'};
http.createServer((req,res)=>{
  let requested;
  try{requested=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch(e){res.writeHead(400);res.end('Invalid URL');return;}
  // Resolve against the project root, then reject paths outside it.
  const file=path.resolve(root,'.'+(requested==='/'?'/index.html':requested));
  if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403);res.end('Forbidden');return;}
  fs.readFile(file,(error,bytes)=>{if(error){res.writeHead(error.code==='ENOENT'?404:403);res.end('File not found');return;}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});res.end(bytes);});
}).listen(port,'127.0.0.1',()=>console.log('SurviveX preview: http://127.0.0.1:'+port));
```

## tools/source-bundle.js

```javascript
/* Generate the requested full file tree and complete per-file source blocks. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),root=path.resolve(__dirname,'..');
function collect(dir){return fs.readdirSync(dir,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name)).flatMap(entry=>{if(['.git','node_modules','SOURCE_FILES.md'].includes(entry.name))return[];const file=path.join(dir,entry.name);return entry.isDirectory()?collect(file):[file];});}
const files=collect(root),relative=file=>path.relative(root,file).split(path.sep).join('/');
let output='# SurviveX — complete source files\n\n';
output+='All source is saved as real files. This companion lists the tree first, then one complete code block for each file.\n\n```text\nDAA_Project/\n'+files.map(file=>'  '+relative(file)).join('\n')+'\n  SOURCE_FILES.md\n```\n\n';
const langs={'.js':'javascript','.css':'css','.html':'html','.svg':'xml','.json':'json','.toml':'toml','.md':'markdown'};
files.forEach(file=>{const name=relative(file),source=fs.readFileSync(file,'utf8'),fence=name.endsWith('.md')?'````':'```';output+='## '+name+'\n\n'+fence+(langs[path.extname(file)]||'text')+'\n'+source+(source.endsWith('\n')?'':'\n')+fence+'\n\n';});
fs.writeFileSync(path.join(root,'SOURCE_FILES.md'),output.trimEnd()+'\n');
console.log('Bundled '+files.length+' complete files into SOURCE_FILES.md.');
```

## vercel.json

```json
{
  "framework": null,
  "outputDirectory": "."
}
```
