requestMatching = (p, d, t) => {
    d = d.map((v, i) => [t[i] >= v ? v : 100 + d[i] - t[i], p[i]]);
    return d.sort((a, b) => a[0] - b[0] || (a[1] < b[1] ? -1 : 1)).map(v => v[1]).slice(0, 5);
}

console.log(requestMatching(["Michael",
    "Mary",
    "Ann",
    "Nick",
    "Dan",
    "Mark"
], [12, 10, 19, 15, 5, 20], [12, 8, 25, 10, 3, 10]));

console.log(requestMatching(["Ann",
    "Michael",
    "Mary"
], [5, 5, 5], [3, 10, 7]));

console.log(requestMatching(["Ann",
    "Anna",
    "Hanna"
], [5, 3, 2], [5, 4, 2]));