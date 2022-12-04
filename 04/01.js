const fs = require("fs");
const inputLines = fs.readFileSync("./input.txt", "utf8").trim().split("\n");

let total = 0;
inputLines.forEach((line) => {(parseInt(line.split(",")[0].split("-")[0]) <= parseInt(line.split(",")[1].split("-")[0]) && parseInt(line.split(",")[0].split("-")[1]) >= parseInt(line.split(",")[1].split("-")[1])) || (parseInt(line.split(",")[1].split("-")[0]) <= parseInt(line.split(",")[0].split("-")[0]) && parseInt(line.split(",")[1].split("-")[1]) >= parseInt(line.split(",")[0].split("-")[1])) ? total++ : null});

console.log(total);
