orienteeringGame = brd => {
    let rl = brd[0].length,
        tmp = [],
        res = [],
        i = rl * brd.length;

    while (i--)
        res[tmp[i] = i] = i ? 1e5 : 0;

    for (t of tmp) {
        let x = t / rl | 0,
            y = t % rl;
        c = res[t] + brd[x][y];
        for (v of[t - rl, t - 1, t + 1, t + rl])
            t % rl == v % rl || (t / rl | 0) == (v / rl | 0) ? c < res[v] ? res[v] = c : 0 : 0;
        tmp.sort((a, b) => res[a] - res[b]);
    }
    return res.pop();
}

console.log(orienteeringGame([
    [42, 51, 22, 10, 0],
    [2, 50, 7, 6, 15],
    [4, 36, 8, 30, 20],
    [0, 40, 10, 100, 1]
]))