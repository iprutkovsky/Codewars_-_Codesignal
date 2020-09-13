nightRoute = g => {
    let r = g.map(_ => 99);
    r[0] = 0;

    for (_ in r)
        for (i in r)
            for (j in r)
                ~(v = g[i][j]) && (v += r[i]) < r[j] ? r[j] = v : 0;
    return r.pop();
}

console.log(nightRoute([
    [-1, 5, 20],
    [21, -1, 10],
    [-1, 1, -1]
]));