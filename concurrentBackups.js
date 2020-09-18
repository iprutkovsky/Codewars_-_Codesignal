// short way
r = 0;
concurrentBackups = (t, d) => d.map(v => r += v / t)[1] ? r % 1 ? -~r : r : d | 0;

// long one
concurrentBackups = (t, d) => {
    let q, c, r = 0;
    while (d.length) {
        q = d.sort((a, b) => b - a).splice(0, t);
        r += q[q.length - 1];
        c = q.map(v => v - q[q.length - 1]).filter(v => v > 0);
        d = [...d, ...c];
    }
    return r;
}


console.log(concurrentBackups(2, [4, 2, 5]));
console.log(concurrentBackups(5, [10]));