optimalStockBasket = (st, rb) => {
    let res = [];
    for (let [a, b] of st) {
        let i = 0;
        while (i <= rb - b)
            res[i] = Math.max(res[i] | 0, a + (res[i++ + b] | 0));
    }
    return res[0];
}

console.log(optimalStockBasket([
    [-1, 2],
    [10, 15],
    [11, 13],
    [9, 10]
], 30));