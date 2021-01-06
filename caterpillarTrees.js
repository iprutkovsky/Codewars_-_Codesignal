caterpillarTrees = (n, e) => {
    let v = [],
        x = y = 0;
    r = Array.from(Array(n), v => []);

    for ([a, b] of e) {
        r[a].push(b);
        r[b].push(a);
    }

    for (i = 0; i < n; i++) {
        let t = [];
        f = (m, p) => {
            v[m] = 1;
            t.push(m);
            for (k of r[m])
                if (!v[k]) {
                    if (f(k, m)) return 1;
                } else if (k != p) return 1;
            return 0;
        }
        if (!v[i] && !f(i)) {
            ++x;
            if (!t.map(a => r[a]).filter(a => a.length > 2).some(a => a.map(b => r[b]).filter(b => b.length > 1).length > 2))
                ++y;
        }
    }
    return [x, y];
}



console.log(caterpillarTrees(10, [
    [0, 3],
    [0, 2],
    [3, 1],
    [3, 4],
    [3, 5],
    [3, 6],
    [7, 8]
]));