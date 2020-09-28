catalogUpdate = (clg, upd) => {
    let m = {};
    for (let v of clg.concat(upd)) {
        let t = v.shift(),
            u = m[t];
        u ? u.push(...v) : m[t] = v;
    }
    return Object.keys(m).sort().map(v => [v, ...m[v].sort()]);
}

console.log(catalogUpdate([
    ["Books", "Classics", "Fiction"],
    ["Electronics", "Cell Phones", "Computers", "Ultimate item"],
    ["Grocery", "Beverages", "Snacks"],
    ["Snacks", "Chocolate", "Sweets"],
    ["root", "Books", "Electronics", "Grocery"]
], [
    ["Snacks", "Marmalade"],
    ["Fiction", "Harry Potter"],
    ["root", "T-shirts"],
    ["T-shirts", "CodeSignal"]
]));