isButterfly = a => {
    let b = c = 0;
    a.map((v, i) => {
        l = v.filter(u => u).length;
        if (!v[i]) {
            l == 2 && ++b;
            l == 4 && ++c;
        }
    });
    return b == 4 && c == 1;
}

console.log(isButterfly([
    [false, true, true, false, false],
    [true, false, true, false, false],
    [true, true, false, true, true],
    [false, false, true, false, true],
    [false, false, true, true, false]
]));