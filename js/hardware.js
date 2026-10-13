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
