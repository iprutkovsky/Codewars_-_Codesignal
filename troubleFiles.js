troubleFiles = (f, bp) => bp.map(v => {
    c = d = 0;
    for ([a, b] of f.slice()) {
        if (a <= v + d) {
            f.shift();
            a <= v ? d += b : ++c;
        }
    };
    return c;
})

console.log(troubleFiles([
    [461618501, 3],
    [461618502, 1],
    [461618504, 2],
    [461618506, 5],
    [461618507, 6]
], [461618501, 461618502, 461618504, 461618505, 461618506]));