deleteDigit = n => Math.max(...[...n + ''].map((_, i, a) => a.filter((_, j) => j - i).join('')));

console.log(deleteDigit(152));