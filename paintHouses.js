paintHouses = cost => {
    let [R, B, G] = [0, 0, 0];
    return cost.map(([r, b, g]) => [R, B, G] = [r + Math.min(B, G), b + Math.min(R, G), g + Math.min(R, B)]) | Math.min(R, B, G);
}

console.log(paintHouses([
    [1, 3, 4],
    [2, 3, 3],
    [3, 1, 4]
]));