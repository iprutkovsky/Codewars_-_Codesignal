opponentMatching = xp => {
    let res = [], d;

    xp = xp.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);

    while ((l = xp.length) > 1) {
        let md = 1e9, p = 0, i = 1;

        while (i < l) {
            d = xp[i][0] - xp[i - 1][0];
            d < md && (md = d, p = i);
            ++i;
        }

        let a = xp[p][1], b = xp[p - 1][1];

        res.push(a < b ? [a, b] : [b, a]);
        xp.splice(p - 1, 2);
    }
    return res;
}

console.log(opponentMatching([200, 100, 70, 130, 100, 800, 810]));