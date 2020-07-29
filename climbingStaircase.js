function climbingStaircase(n, k) {
    let res = [];
    let dfs = (n, k, st, res) => {
        if (n == 0) res.push(st);
        else
            for (let i = 1; i < k + 1; ++i)
                if (n - i >= 0) dfs(n - i, k, st.concat(i), res);
    }
    dfs(n, k, [], res);
    return res;
}

f = climbingStaircase = (n, k, st = [], res = []) => {
    if (n == 0) res.push(st);
    else
        for (let i = 1; i < k + 1; ++i)
            n - i >= 0 && f(n - i, k, st.concat(i), res);
    return res;
};

console.log(climbingStaircase(4, 2));