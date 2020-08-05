findSubarrayBySum = (s, a) => {
    let i = j = 0;
    while (s)
        s += s > 0 ? -a[j++] : a[i++];
    return ++s ? [i + 1, j] : [-1];
}

console.log(findSubarrayBySum(21, [4, 8, 9, 10, 3, 8]));