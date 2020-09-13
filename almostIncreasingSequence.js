almostIncreasingSequence = a => {
    for (let c = 0, i = 1; i < a.length; ++i) {
        a[i] <= a[i - 1] && ++c;
        if (a[i] <= a[i - 2] && a[i + 1] <= a[i - 1] || c > 1) return false;
    }
    return true;
}

console.log(almostIncreasingSequence([1, 2, 1, 2]));