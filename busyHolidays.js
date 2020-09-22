f = a => a.map(v => v.map(u => u.split(':').reduce((ac, v) => ac * 60 + +v)));

g = busyHolidays = (s, o, lt, cnt) => {
    let r = f(s);
    return f(o).every(([a, b], i) =>
        r.some(([c, d], j) => Math.max(a, c) + lt[i] <= Math.min(b, d) && r.splice(j, 1))) || !cnt && g(s.reverse(), o, lt, 1);
}

console.log(busyHolidays([
    ["15:10", "16:00"],
    ["17:40", "22:30"]
], [
    ["17:30", "18:00"],
    ["15:00", "15:45"]
], [15, 30]));