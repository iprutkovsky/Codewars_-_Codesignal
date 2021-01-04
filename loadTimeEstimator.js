loadTimeEstimator = (sizes, uploadingStart, val) => {
    let files = [],
        queue = [],
        result = [],
        t = 0,
        i = 0;

    sizes.map((_, i) => files[i] = [sizes[i], uploadingStart[i], i]);

    files.sort((a, b) => a[1] - b[1]);

    while (i < files.length || queue.length) {
        queue.length == 0 && (t = files[i][1]);

        while (i < files.length && files[i][1] == t)
            queue.push(files[i++]);

        let min = Math.min(...queue.map(v => v[0])),
            next = Math.min(...files.map(v => v[1] > t ? v[1] : 1e9)),
            sec = Math.min(min / (val / queue.length), next - t);

        t += sec;

        queue = queue
            .map(v => {
                v[0] -= sec * val / queue.length;
                v[0] == 0 && (result[v[2]] = Math.ceil(t));
                return v;
            })
            .filter(v => v[0]);
    }
    return result;
}

console.log(loadTimeEstimator([21, 10], [100, 105], 2));