function pause() {
    return new Promise(resolve => setTimeout(resolve));
}

async function two(div ) {
    for (let i = MIN; i < MAX; i++) {
        await pause();
        add(i, div);
    }
}

onClick(two);