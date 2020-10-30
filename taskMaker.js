a = [];
taskMaker = (s, i) => s.map(v => {
    let t = /\/\/DB (\d+)\/\//,
        m = v.match(t);
    m ? m[1] == i ? a[a.length - 1] = v.replace(t, '') : 0 : a.push(v);
}) && a;

console.log(taskMaker(["ans = 0",
    "for i in range(n):",
    "    for j in range(n):",
    "    //DB 3//for j in range(1, n):",
    "    //DB 2//for j in range(n + 1):",
    "        ans += 1",
    "return ans"
], 3));