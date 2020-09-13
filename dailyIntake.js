dailyIntake = a => {
    let tmp = [[]];
    let i = k = 2e3;
    while (i-- >= 0) {
        let j = k;
        while (j >= 0) {
            let t = tmp[j];
            if (t) tmp[j + a[i]] = [i, ...t];
            let r = ~i ? 0 : tmp[k++] || t;
            if (r) return r;
            --j;
        }
    }
}

console.log(dailyIntake([400, 800, 400, 500, 350, 350]));