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
