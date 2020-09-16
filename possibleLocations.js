possibleLocations = (n, r) => {
    let w = 1e6,
        l = 0,
        d = [],
        res = [];

    r.map((v, i) => {
        d[i] = r.map(_ => w);
        v.map(([a, b]) => d[i][a] = b);
    });

    while (++l < 5)
        for (k = 0; k < n; ++k)
            for (i = 0; i < n; ++i) {
                let v = d[k][i],
                    u = k - i && v < w;
                for (j = 0; j < n; ++j) {
                    d[i][k] < w && d[k][j] < w && d[i][k] + d[k][j] < d[i][j] ? d[i][j] = d[i][k] + d[k][j] : 1;
                    d[k][j] < w && d[j][i] < w && d[k][j] + d[j][i] < v ? u = 0 : 1;
                }
                u && l == 4 && res.push([k, i]);
            }
    return res;
}

console.log(possibleLocations(7, [
    [
        [1, 100]
    ],
    [
        [0, -10],
        [2, -100]
    ],
    [
        [0, 0]
    ],
    [
        [0, 3],
        [4, 0]
    ],
    [
        [5, 1]
    ],
    [
        [3, -2]
    ],
    [
        [0, -50]
    ]
]));