const data = await Deno.readTextFile("./input/0101_data.txt");

const summed = data
    .split("\n\n")
    .map((l) => l.split("\n"))
    .map((l) => l.map((num) => parseInt(num)).reduce((prev, cur) => prev + cur, 0));

const result = Math.max(...summed);
console.log(`0101: ${result}`);
