function createCanvas(w, h, font = '8px system-ui') {
    let canvas = new OffscreenCanvas(w, h);
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx.font = font;
    ctx.textBaseline= "bottom";
    return ctx;
}

const ctx = createCanvas(100, 100);


function characterData(code) {
    const ch = String.fromCodePoint(code);
    const r = ctx.measureText(ch);
    const w = Math.ceil(r.width);
    const h = Math.ceil(r.actualBoundingBoxAscent - r.actualBoundingBoxDescent);
  
    const ctx2 = createCanvas(w, h);
    ctx2.fillText(ch, 0, h);
    let data =   ctx2.getImageData(0, 0, w, h).data.map((v, i) => v && i % 4 === 3 ? i : 0).filter(n => n);
   
    return { ch, w, h, data };
}

const nullChar = characterData(0);

 

 function likeNull(code) {
    const char = characterData(code);
    return nullChar.data.every((j, k) => j === char.data[k]);//nullChar.w === char.w && nullChar.h === char.h &&
}

export function insertChar(code, parent) {
    parent.insertAdjacentText('beforeend', String.fromCodePoint(code));
}
 
export const MIN = 127734, MAX = 129686;
 
export function add(i, parent) {
    if (!likeNull(i))
        insertChar(i, parent);
}