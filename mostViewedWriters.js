mostViewedWriters = (tId, aId, vs) => {
    let r = [],
        i, j, k, l, v;
    for (i in tId)
        for (j of tId[i]) {
            r[j] = r[j] || [];
            for (k of aId[i]) {
                v = vs.filter(a => a[0] == k);
                if (v) {
                    for (l of v)
                        r[j][l[1]] = (r[j][l[1]] || 0) + l[2];
                }
            }
        }
    return r.filter(v => v).map(v => v.map((u, i) => u == null ? null : [i, u]).filter(v => v).sort((a, b) => b[1] - a[1]).filter((v, i) => v[1] || i < 10));
}

console.log(mostViewedWriters([
    [1, 2, 3],
    [2, 3, 4],
    [1, 4],
    [2, 3]
], [
    [6, 4],
    [1, 2],
    [5],
    [3]
], [
    [2, 1, 2],
    [6, 3, 5],
    [3, 3, 0],
    [5, 1, 1],
    [4, 2, 3],
    [1, 4, 2]
]));