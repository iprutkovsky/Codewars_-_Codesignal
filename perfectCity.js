f = v => v - (v | 0);
g = (v, u) => (v | 0) == (u | 0) ? Math.min(f(v) + f(u), 2 - f(v) - f(u)) : Math.abs(v - u);
perfectCity = ([a, b], [c, d]) => (g(a, c) + g(b, d));


console.log(perfectCity([0.4, 1], [0.9, 3]));
console.log(perfectCity([2.4, 1], [5, 7.3]));
console.log(perfectCity([0, 0.2], [7, 0.5]));