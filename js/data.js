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
