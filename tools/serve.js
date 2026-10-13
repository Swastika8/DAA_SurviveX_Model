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
