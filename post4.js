async function three(div) {
    for (let i = MIN; i < MAX; i++) {
        await scheduler.yield();
        add(i, div);
    }
}

onClick(three);