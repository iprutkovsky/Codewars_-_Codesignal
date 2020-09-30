// short way
launchSequenceChecker = (a, b) => !a.some((v, i) => a[v] >= (a[v] = b[i]));

// long one
launchSequenceChecker = (a, b) => {
    let m = {};
    a.map((v, i) => {
        console.log(m);
        m[v] = m[v] || [];
        m[v] && m[v].push(b[i]);
    });
    for (v of Object.values(m))
        for (i in v)
            if (v[i] <= v[i - 1]) return false;
    return true;
}

console.log(launchSequenceChecker(["stage_1",
    "stage_2",
    "dragon",
    "stage_1",
    "stage_2",
    "dragon"
], [1, 10, 11, 2, 12, 111]));

console.log(launchSequenceChecker(["Falcon 9",
    "Falcon 9",
    "Falcon 9",
    "Falcon 9",
    "Falcon 9",
    "Falcon 9"
], [1, 3, 5, 7, 7, 9]));

console.log(launchSequenceChecker(["Dragon",
    "Dragon",
    "Dragon",
    "Dragon",
    "dragon",
    "Dragon",
    "dragon"
], [1, 3, 5, 7, 7, 9, 8]));