
import { pause } from './pause.js';
import { add, MIN, MAX } from './shared.js';


export function one(div) {
    for (let i = MIN; i < MAX; i++)
        add(i, div);
}

export async function two(div) {
    for (let i = MIN; i < MAX; i++) {
        await pause();
        add(i, div);
       // console.log(div.textContent.length );
    }
}
 
export async function three(div) {
    for (let i = MIN; i < MAX; i++) {
        await scheduler.yield();
        add(i, div);
      //  console.log(div.textContent.length );
    }
}

export function four(div) {
    let p = Promise.resolve();
    for (let i = MIN; i < MAX; i++)
        p.then(() => add(i, div));
}

export function onClick(func) {
    btn.addEventListener('click', async () => {

        btn.remove();

        const start = Date.now();

        await func(div);

        const end = Date.now();

        div.insertAdjacentText("afterend", end - start);
       // console.log((end - start) / (MAX - MIN));
       // console.log(  (MAX - MIN));
    
    });
}