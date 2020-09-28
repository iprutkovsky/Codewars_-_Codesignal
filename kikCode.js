kikCode = u => {
    let r = [],
        i = l = n = 0;
    let a = [...(+u).toString(2).padStart(52, 0)].reverse();
    for (v of[3, 4, 8, 10, 12, 15]) {
        let u = a.slice(n, n += l = v);
        for (j = 0, d = 360 / v, ++i; j < l;) {
            let s = u.slice(j).join('').split(0),
                f = s[0].length;
            if (u[0] + u[l - 1] > 10 && f < v) {
                l -= s[s.length - 1].length;
                r.push([[i, d * l], [i, 360 + f * d]]);
                u = u.slice(f, l);
                l -= f;
            }
            u[j++] > 0 && r.push([[i, d * --j], [i, d * (j += f)]]);
        }
    }
    return r;
}

console.log(kikCode("1851027803204441"));