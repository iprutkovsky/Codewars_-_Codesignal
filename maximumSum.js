maximumSum = (a, q) => {
    let c = Array(a.length).fill(0);
    q.map(([a, b]) => {
        while (a <= b)
            ++c[a++];
    });
    a.sort();
    c.sort();
    return a.reduce((ac, v, i) => ac + v * c[i], 0);
}

console.log(maximumSum([9, 7, 2, 4, 4], [
    [1, 3],
    [1, 4],
    [0, 2]
]));