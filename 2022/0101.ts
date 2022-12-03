const data = await Deno.readTextFile("./input/0101_data.txt");

const summed = data
    .split("\n\n")
    .map((l) => l.split("\n"))
    .map((l) => l.map((num) => parseInt(num)).reduce((acc, cur) => acc + cur, 0));

const result = Math.max(...summed);
console.log(`0101: ${result}`);

const threeLargestSum = [...summed]
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, cur) => acc + cur, 0);

console.log(`0102: ${threeLargestSum}`);
