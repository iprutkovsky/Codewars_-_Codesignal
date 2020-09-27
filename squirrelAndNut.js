squirrelAndNut = (t, r) => {
    let arr = [],
        i = 0;
    let f = (a, b) => a ? b.includes(a) ? b.slice(0, b.indexOf(a) + 1) : [a, ...f(arr[a], b)] : [];

    while (i < t.length) {
        let p = t[i++],
            c = t[i++];
        arr[p] = arr[p] || 0;
        arr[c] = p;
    }
    return r.map(([a, b, c]) => f(b, f(a, [])).includes(c));
}

console.log(squirrelAndNut([1, 2, 1, 3, 2, 4, 3, 5, 3, 6], [
    [4, 6, 3],
    [1, 4, 2],
    [5, 6, 1]
]));