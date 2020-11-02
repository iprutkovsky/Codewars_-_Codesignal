isPseudoforest = (_, m) => {
    let a = [],
        t = [],
        r = 0,
        n = 0;

    m.map(([x, y]) => {
        a[x] = a[x] || [];
        a[x].push(y);
        n = Math.min(n, x);
    })

    let s = [n];

    while (s.length) {
        for (i of a[s.pop()] || []) {
            if (t[i]) {
                if (++r > 1) return false;
            } else {
                s.push(i);
                t[i] = 1;
            }
        }
    }
    return true;
}

console.log(isPseudoforest(6, [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 1],
    [3, 4],
    [4, 0],
    [5, 6]
]));