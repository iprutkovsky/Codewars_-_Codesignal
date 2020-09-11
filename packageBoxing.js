packageBoxing = (pkg, bxs) => {
    let m = 1 / 0,
        r = -1;
    let f = x => x.sort((a, b) => a - b);
    f(pkg);
    bxs.map((v, i) => f(v) && pkg.every((u, j) => u <= v[j]) && (t = v.reduce((a, b) => a * b)) < m ? (r = i, m = t) : 0);
    return r;
}
console.log(packageBoxing([4, 2, 5], [
    [4, 3, 5],
    [5, 2, 5]
]));