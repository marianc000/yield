const MIN = 127734, MAX = 129686;

function insertChar(code, parent) {
    parent.insertAdjacentText('beforeend', String.fromCodePoint(code));
}

for (let i = MIN; i < MAX; i++)
    insertChar(i, div);
 