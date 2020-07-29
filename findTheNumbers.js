function findTheNumbers(a) {
    let o = {};
    a.map(v => o[v] = ++o[v] || 1);
    return Object.keys(o).filter(v => o[v] == 1);
}

/****************************************************/

i = 0;
findTheNumbers = a => a.sort().filter(v => v != a[i - 1] & v != a[++i]);

console.log(findTheNumbers([1, 3, 5, 6, 1, 4, 3, 6]));