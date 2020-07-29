subsetSum = a => {
    let n = 0,
        s = new Set([n]);

    for (let i of a) {
        for (let j of[...s])
            s.add(i + j);
        n += i;
    }
    return s.has(n / 2);
}

console.log(subsetSum([3, 5, 16, 8]));