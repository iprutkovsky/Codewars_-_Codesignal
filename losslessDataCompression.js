losslessDataCompression = (S, w) => {
    let r = '';
    for (let i = 0; i < S.length; ++i) {
        let m = 0, s = 0;
        for (let j = Math.max(i - w, 0); j + m < i; ++j) {
            let k = 0;
            while (j + k < i && S[j + k] == S[i + k])
                ++k;
            if (k > m) {
                m = k;
                s = j;
            }
        }
        m > 0 ? (r += `(${s},${m})`, i += m - 1) : r += S[i];
    }
    return r;
}

console.log(losslessDataCompression('abacabadabacaba', 7));