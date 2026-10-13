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
