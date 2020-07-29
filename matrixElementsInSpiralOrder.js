matrixElementsInSpiralOrder = m => {
    a = [];
    while (m.length)
        a.push(...m.shift(), ...m.map(v => v.pop()), ...(m.pop() || []).reverse(), ...m.map(v => v.shift()).reverse());
    return a.filter(v => v != undefined);
}

console.log(matrixElementsInSpiralOrder([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
]));