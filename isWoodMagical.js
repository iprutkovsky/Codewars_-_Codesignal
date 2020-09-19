isWoodMagical = (n, w) => {
    let r = Array(n).fill(1);
    return !w.some(([x, y]) => {
        if (r[y])
            r[x] = 0;
        return r[y] == r[x];
    });
}

console.log(isWoodMagical(5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [0, 2],
    [4, 0]
]));