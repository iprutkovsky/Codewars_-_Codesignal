r = 0;
isBook = a => a.map(v => v.map(u => r += u)) && r == 4 * a.length - 6 - a[0][0];

console.log(isBook([
    [false, true, true, true],
    [true, false, true, true],
    [true, true, false, false],
    [true, true, false, false]
]));