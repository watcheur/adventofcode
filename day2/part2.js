import { readFileSync } from "fs";

let regex = /(.*) ([0-9]{1,})/;

const Action = {
    FORWARD: 'forward',
    UP: 'up',
    DOWN: 'down'
};

const data = readFileSync("input.txt").toString().split("\r\n").map(line => {
    const match = line.match(regex);

    if (!line)
        return undefined;

    return {
        action: match[1],
        length: Number(match[2])
    }
}).filter(d => d);

let depth = 0;
let horizontalPosition = 0;
let aim = 0;

for (var movement of data)
{
    switch (movement.action)
    {
        case Action.FORWARD:
            horizontalPosition += movement.length;
            depth += aim * movement.length;
            break;

        case Action.UP:
            aim -= movement.length;
            break;

        case Action.DOWN:
            aim += movement.length;
            break;
    }
}

console.log(`Depth: ${depth}, Horizontal position: ${horizontalPosition}, mult: ${depth * horizontalPosition}`);