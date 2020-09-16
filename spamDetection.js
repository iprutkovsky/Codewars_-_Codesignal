spamDetection = (msg, spsg) => {
    let gcd = (a, b) => b ? gcd(b, a % b) : a;
    let users = {},
        uniq = {},
        words = new Set(),
        userlist = [];
    let l = msg.length,
        sht = 0,
        sgl = 0,
        nospam = true;
    let i, j, m, id, w;

    for (i in msg) {
        [m, id] = msg[i];
        w = m.match(/[a-z]+/ig);
        !w || w.length < 5 && ++sht;
        users[id] = users[id] || { l: 0, mess: {} };
        users[id].l++;
        users[id].mess[m] = users[id].mess[m] | 0;
        users[id].mess[m]++;
        uniq[m] = uniq[m] | 0;
        ++uniq[m];
        w && (sgl += 0 < w.reduce((a, v) => spsg.includes(v = v.toLowerCase()) && words.add(v) ? a + 1 : a, 0));
    }
    for (i in users)
        for (j in users[i].mess)
            if (users[i].l > 1 && users[i].l <= users[i].mess[j] * 2) {
                userlist.push(i);
                break;
            }
    for (i in uniq)
        if (l > 1 && uniq[i] * 2 >= l) {
            nospam = i;
            break;
        }
    return [
        sht / l < .9 ? "passed" : "failed: " + (sht / gcd(sht, l)) + "/" + (l / gcd(sht, l)),
        userlist.length < 1 ? "passed" : "failed: " + userlist.sort((a, b) => a - b).join(' '),
        nospam == true ? "passed" : "failed: " + nospam,
        sgl / l < .5 ? "passed" : "failed: " + [...words].sort().join(' ')
    ];
}

console.log(spamDetection([
    ["Sale today!", "2837273"],
    ["Unique offer!", "3873827"],
    ["Only today and only for you!", "2837273"],
    ["Sale today!", "2837273"],
    ["Unique offer!", "3873827"]
], ["sale",
    "discount",
    "offer"
]));