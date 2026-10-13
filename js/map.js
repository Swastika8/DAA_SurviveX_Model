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
