orienteeringBeginner = (n, r) => {
    let q = [0],
        p = [0];
    while (q.length) {
        let c = q.shift();
        r[c].map(([v, l]) => {
            let t = p[c] + l;
            if (t >= p[v]) return;
            p[v] = t;
            q.push(v);
        });
    }
    return p[--n];
}


console.log(orienteeringBeginner(6, [
    [[1, 3]],
    [[4, 1], [3, 2]],
    [[1, 0]],
    [[5, 3]],
    [[5, 5]],
    []
]));