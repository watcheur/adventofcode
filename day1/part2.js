import { readFileSync } from "fs";

const data = readFileSync("input.txt").toString().split("\r\n").map(Number);

let increased = 0;
let previous;

for (var i = 2; i < data.length; i++)
{
    let sum = data[i - 2] + data[i - 1] + data[i];
    if (sum > previous)
        increased++;
    previous = sum;
}

console.log("Increased: ", increased);