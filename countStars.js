countStars = a => {
    let r = 0;
    a.map((_, i) => {
        let t = a.map(v => v.reduce((ac, u) => ac += u, 0));
        r += t[i] && !a[i].some((u, j) => u && t[j] - 1) ? t[i] - 1 ? 1 : .5 : 0;
    })
    return r;
}

console.log(countStars([
    [false, true, false, false, false],
    [true, false, false, false, false],
    [false, false, false, true, false],
    [false, false, true, false, false],
    [false, false, false, false, false]
]));