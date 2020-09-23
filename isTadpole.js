isTadpole = a => {
    let t = [],
        x = y = z = 0;

    a.map((v, i) => {
        t[i] = 0;
        v.map((_, j) => a[i][j] && ++t[i]);
    });

    t.map((v, i) => {
        v == 1 && ++y;
        v == 3 && ++x;
        v < 1 || v > 3 && ++z;
        t[i] == 2 ? t[i] = 1 : t[i] = 0;
    });

    for (i in t) {
        let r = [];
        l = r[i] = 1;
        while (l) {
            l = n = 0;
            for (j in a[i])
                if (a[i][j] && t[j])
                    if (!r[j]) {
                        i = j;
                        l = r[i] = 1;
                        break;
                    } else ++n;
            if (n > 1) return false;
        }
    }
    return !z && x == y == 1;
}

console.log(isTadpole([
    [false, true, true, false, false],
    [true, false, false, true, false],
    [true, false, false, true, false],
    [false, true, true, false, true],
    [false, false, false, true, false]
]));