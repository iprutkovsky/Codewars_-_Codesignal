function knightOnBoardProbability(m, n, steps, x, y) {
    let mem = {};
    let dfs = (steps, x, y) => {
        let k = `${steps}:${x}:${y}`,
            c = 0;
        if (mem[k]) return mem[k];

        if (x < 0 || x >= m || y < 0 || y >= n) return 0;
        if (steps == 0) return 1;

        for (let [i, j] of[[-2, -1], [-2, 1], [-1, -2], [-1, 2]]) {
            c += dfs(steps - 1, x + i, y + j);
            c += dfs(steps - 1, x - i, y - j);
        }
        mem[k] = c;
        return c;
    }
    return dfs(steps, x, y) / 8 ** steps;
}

console.log(knightOnBoardProbability(8, 8, 2, 4, 4));