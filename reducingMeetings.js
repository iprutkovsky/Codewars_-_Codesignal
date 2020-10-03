reducingMeetings = (n, m) => {
    let a = [],
        r = 0;
    let f = i => i == a[i] ? i : f(a[i]);

    for (; n, a[--n] = n;);

    m.sort((a, b) => b[2] - a[2]);

    for ([i, j, k] of m) {
        let v = f(i),
            u = f(j);
        if (v - u) {
            a[v] = u;
            r += k;
        }
    }
    return r;
}

console.log(reducingMeetings(4, [
    [0, 1, 3],
    [1, 2, 2],
    [3, 0, 1],
    [3, 2, 5]
]));