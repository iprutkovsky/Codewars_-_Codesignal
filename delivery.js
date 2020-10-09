delivery = ([a, b, c], s) => s.map(([d, v, t]) => {
    t += (d + a) / v;
    return t >= b && t <= b + c;
});

console.log(delivery([200, 20, 15], [
    [300, 40, 5],
    [600, 40, 10]
]));