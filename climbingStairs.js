climbingStairs = n => {
    let a = [1, 1];
    for (let i = 2; n > 1 && i <= n; a[i] = a[i - 1] + a[i - 2], ++i);
    return a[n];
}

/****************************************************/

climbingStairs = n => Array(n - 1).fill(0).reduce(([a, b]) => [b, a + b], [1, 1])[1];

/****************************************************/

f = climbingStairs = (n, a = 0, b = 1) => n ? f(n - 1, b, a + b) : b;

/****************************************************/

console.log(climbingStairs(4));