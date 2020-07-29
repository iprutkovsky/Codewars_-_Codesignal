possibleSums = (c, q) => {
    let s = new Set([0]);
    for (let i = 0; i < c.length; ++i)
        for (u of[...s])
            for (j = q[i]; j;)
                s.add(u + c[i] * j--);
    return s.size - 1;
}

/****************************************************/

let s = new Set([0]);
possibleSums = (c, q) =>
    c.map((v, i) => {
        for (u of[...s])
            for (j = q[i]; j;)
                s.add(u + v * j--);
    }) && s.size - 1;

console.log(possibleSums([10, 50, 100], [1, 2, 1]));