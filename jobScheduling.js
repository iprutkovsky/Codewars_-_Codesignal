jobScheduling = (rT, jP, tFS) => {
    let a = [], cnt = 0, i = j = 0;
    while (i <= tFS) {
        while (rT.length && rT[j] <= i) {
            a.push([jP[j], j]);
            a.sort((a, b) => a[0] - b[0]);
            ++j;
        }
        if (cnt < 1 && a.length)
            cnt = a.shift()[0];
        --cnt;
        ++i;
    }
    return a.map(v => v[1]);
}

console.log(jobScheduling([0, 5, 8, 11], [9, 4, 2, 1], 11));