const input = require("fs").readFileSync("./input.txt", "utf8").trim();

let start = 0;
let end = 4;
let rollingWindow = input.slice(start, end).split("");

while (true) {
  if (new Set(rollingWindow).size === rollingWindow.length) {
    console.log(end);
    break;
  } else {
    start++;
    end++;
    rollingWindow = input.slice(start, end).split("");
  }
}
