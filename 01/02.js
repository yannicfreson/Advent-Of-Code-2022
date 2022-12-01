// put the lines from the input.txt file into an array
const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8").split("\n");
const numbers = input.map((number) => parseInt(number));

let elvesInventories = [];
let currentTotal = 0;
numbers.forEach((number) => {
  if (number) {
    currentTotal += number;
  } else {
    elvesInventories.push(currentTotal);
    currentTotal = 0;
  }
});

console.log(
  elvesInventories
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b)
);
