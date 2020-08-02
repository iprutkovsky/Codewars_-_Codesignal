equilibriumPoint = a => {
    let s = t = 0;
    for (let i of a) t += i;
    for (let i in a) {
        if (s == t - s - a[i]) return +i + 1;
        s += a[i];
    }
    return -1;
}

equilibriumPoint = a => {
    let s = i = 0;
    a.map(v => s += v);
    return -a.every(v => v + (s -= a[i++] * 2)) | i;
}

console.log(equilibriumPoint([10, 5, 3, 5, 2, 2, 6, 8]));