equilibriumPoint = a => {
    // let sum = a => a.reduce((ac, v) => ac + v, 0);
    let sum = a => {
        let s = 0;
        for (let i = 0; i < a.length; s += a[i], ++i);
        return s;
    };
    for (let i = 0; i < a.length; ++i)
        if (sum(a.slice(0, i)) == sum(a.slice(i + 1))) return i + 1;
    return -1;
}

console.log(equilibriumPoint([10, 5, 3, 5, 2, 2, 6, 8]));