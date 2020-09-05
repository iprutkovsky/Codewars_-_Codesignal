serverFarm = (jbs, srv) => {
    t = [];
    r = [];

    while (srv--) {
        t[srv] = 0;
        r[srv] = [];
    }

    let keys = jbs.map((_, i) => i).sort((a, b) => jbs[b] - jbs[a]);

    for (let i of keys) {
        let j = t.indexOf(Math.min(...t));
        r[j].push(i);
        t[j] += jbs[i];
    }
    return r;
}

console.log(serverFarm([15, 30, 15, 5, 10], 3))