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
