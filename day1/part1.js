import { readFileSync } from "fs";

const data = readFileSync("input.txt").toString().split("\r\n").map(Number);

let total = 0;
data.reduce((prev, current, idx) => {
    if (idx > 0)
        console.log(current, (current > prev ? '\t(increased)' : '\t(decreased)'));
    else
        console.log(current, "\tN/A - no previous measurement");

    if (idx > 0 && current > prev)
        total++;

    return current;
}, 0);

console.log("total increase: ", total);