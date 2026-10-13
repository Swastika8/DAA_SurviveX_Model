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
