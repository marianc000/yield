const MIN = 127734, MAX = 129686;

function insertChar(code, parent) {
    parent.insertAdjacentText('beforeend', String.fromCodePoint(code));
}
 
function add(i, parent) {
    if (!likeNull(i)) // compares canvases of character i and 0
        insertChar(i, parent);
}

function one(div) {
    for (let i = MIN; i < MAX; i++)
        add(i, div);
}

function onClick(func) {
    btn.addEventListener('click', async () => {

        btn.remove();

        const start = Date.now();

        await func(div);

        div.insertAdjacentText("afterend", Date.now() - start);

    });
}

onClick(one);