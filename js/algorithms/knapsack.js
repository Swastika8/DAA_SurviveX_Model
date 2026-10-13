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
