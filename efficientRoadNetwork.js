efficientRoadNetwork = (n, r) => {
    let m = {},
        t = n,
        i, j;

    r.map(([a, b], i) => {
        while (i < n)
            m[i] = m[i++] || [];
        m[a].push(b);
        m[b].push(a);
    });

    while (--t) {
        let s = {};
        for (i of m[t])
            for (j of m[i])
                s[i] = s[j] = 1;
        if (Object.keys(s).length < n) return false;
    }
    return true;
}

console.log(efficientRoadNetwork(6, [
    [0, 4],
    [5, 0],
    [2, 1],
    [1, 4],
    [2, 3],
    [5, 2]
]));