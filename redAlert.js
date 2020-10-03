redAlert = (n, c, k) => {
    let a = [[1, 0]];

    for ([i, v] of a) {
        t = [i, v % k];
        if (!c[t] && i % k - v % k) {
            if (i == n)
                return v;
            c.map((j, u) => j - i || a.push([c[u & 1 ? u - 1 : u + 1], c[t] = v + 1]));
        }
    }
    return -1;
}

console.log(redAlert(5, [1, 2, 1, 3, 2, 4, 3, 5, 4, 5], 4));