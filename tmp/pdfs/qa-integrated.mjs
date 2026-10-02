import fs from 'node:fs';
import {createCanvas,DOMMatrix,ImageData,Path2D} from '@napi-rs/canvas';
globalThis.DOMMatrix=DOMMatrix;globalThis.ImageData=ImageData;globalThis.Path2D=Path2D;
const pdfjs=await import('pdfjs-dist/legacy/build/pdf.mjs');
const doc=await pdfjs.getDocument({data:new Uint8Array(fs.readFileSync('output/pdf/TQTG_II_Mother_COPY_v1_Part_1B_and_Parts_2-4.pdf')),useSystemFonts:true}).promise;
let texts=[],sheets=[];let canvas,ctx;
for(let n=1;n<=doc.numPages;n++){
 if((n-1)%12===0){canvas=createCanvas(1000,1420);ctx=canvas.getContext('2d');ctx.fillStyle='#cbd5df';ctx.fillRect(0,0,1000,1420);}
 const p=await doc.getPage(n),v=p.getViewport({scale:0.4}),c=createCanvas(Math.ceil(v.width),Math.ceil(v.height));await p.render({canvasContext:c.getContext('2d'),viewport:v}).promise;
 let i=(n-1)%12,x=(i%4)*250,y=Math.floor(i/4)*470;ctx.drawImage(c,x,y+20);ctx.fillStyle='#000';ctx.font='14px sans-serif';ctx.fillText('Page '+n,x+5,y+15);
 texts.push((await p.getTextContent()).items.map(x=>x.str).join(''));
 if(n%12===0||n===doc.numPages){let f=`tmp/pdfs/contact-${Math.ceil(n/12)}.png`;fs.writeFileSync(f,canvas.toBuffer('image/png'));sheets.push(f);}
 if([1,5,doc.numPages].includes(n)){const vv=p.getViewport({scale:1.25}),cc=createCanvas(Math.ceil(vv.width),Math.ceil(vv.height));await p.render({canvasContext:cc.getContext('2d'),viewport:vv}).promise;fs.writeFileSync(`tmp/pdfs/page-${n}.png`,cc.toBuffer('image/png'));}
}
fs.writeFileSync('tmp/pdfs/extracted.txt',texts.join('\n\n'));console.log(JSON.stringify({pages:doc.numPages,sheets,textLengths:texts.map(t=>t.length),hasEnd:texts.join('').includes('目前位置'),transmissionMarkers:/END OF PART|CONTINUATION MARKER/.test(texts.join(''))}));

