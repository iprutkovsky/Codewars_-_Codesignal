dataRoute = (rcs, srv, nwk) => {
    let r = 0,
        t, p;
    let calc = (i, c, v) => nwk[i].map((u, j) => {
        if (u * !t[j]) {
            v ^= calc(t[j] = j, c > u ? u : c);
            nwk[i][j] -= v;
            nwk[j][i] += v;
        }
    }) && i - srv ? v : c;

    while (t = [], p = calc(rcs, 9))
        r += p;

    return r;
}

console.log(dataRoute(4, 5, [
    [0, 2, 4, 8, 0, 0],
    [0, 0, 0, 9, 0, 0],
    [0, 0, 0, 0, 0, 10],
    [0, 0, 6, 0, 0, 10],
    [10, 10, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
]));