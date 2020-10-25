greatRenaming = a => {
    a.unshift(a.pop());
    return a.map(v => {
        v.unshift(v.pop());
        return v;
    });
}

console.log(greatRenaming([
    [false, true, true, false],
    [true, false, true, false],
    [true, true, false, true],
    [false, false, true, false]
]));