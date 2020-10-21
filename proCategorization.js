proCategorization = (ps, pf) => [...new Set(pf.reduce((a, v) => a.concat(...v), []))].sort().map(v => [[v], ps.filter((_, i) => pf[i].includes(v))]);

console.log(proCategorization(["Jack",
    "Leon",
    "Maria"
], [
    ["Computer repair", "Handyman", "House cleaning"],
    ["Computer lessons", "Computer repair", "Data recovery service"],
    ["Computer lessons", "House cleaning"]
]));