arrayPreviousLess = a => a.map((v, i) => items.slice(0, i).reverse().find(u => u < v) || -1);

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));