armyMarch = ([a, b], [c, d], v1, v2) => {
    let r = 99;
    y = b;

    for (let m; m = Math.hypot(a, y - b) / v1 + Math.hypot(c, y - d) / v2, m < r; r = m, y += (d - b) / 1e6);
    return r;
}

console.log(armyMarch([-1.5, 0.5], [1.5, 1.5], 4.4, 1.1));