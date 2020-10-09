roadmap = (t, q) =>
    q.map(([a, b]) => {
        let r = [];
        t.map(v => {
            let [tk, st, ft] = v;
            if (v.includes(a) && b >= st && b <= ft)
                r.push(tk);
            q[tk] = ft + tk;
        });
        return r.sort((a, b) => q[a] > q[b] ? 1 : -1);
    });

console.log(roadmap([
    ["A", "2017-02-01", "2017-03-01", "Sam", "Evan", "Troy"],
    ["B", "2017-01-16", "2017-02-15", "Troy"],
    ["C", "2017-02-13", "2017-03-13", "Sam", "Evan"]
], [
    ["Evan", "2017-03-10"],
    ["Troy", "2017-02-04"]
]));