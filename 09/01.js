let instructions = require("fs")
  .readFileSync("./input.txt", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

// define the initial position of the head and tail
let head = { x: 0, y: 0 };
let tail = { x: 0, y: 0 };

// define a function to move the head
function moveHead(direction, steps) {
  switch (direction) {
    case "U":
      head.y += steps;
      break;
    case "D":
      head.y -= steps;
      break;
    case "L":
      head.x -= steps;
      break;
    case "R":
      head.x += steps;
      break;
  }
}

// define a function to move the tail
function moveTail() {
  // if the head and tail are in the same row or column, move the tail to the same position as the head
  if (head.x == tail.x || head.y == tail.y) {
    tail.x = head.x;
    tail.y = head.y;
  }
  // if the head is two steps directly up, down, left, or right from the tail, move the tail one step in that direction
  else if (Math.abs(head.x - tail.x) == 2 || Math.abs(head.y - tail.y) == 2) {
    if (head.x > tail.x) tail.x += 1;
    else if (head.x < tail.x) tail.x -= 1;
    if (head.y > tail.y) tail.y += 1;
    else if (head.y < tail.y) tail.y -= 1;
  }
  // otherwise, move the tail one step diagonally to keep up with the head
  else {
    if (head.x > tail.x) tail.x += 1;
    else if (head.x < tail.x) tail.x -= 1;
    if (head.y > tail.y) tail.y += 1;
    else if (head.y < tail.y) tail.y -= 1;
  }
}

instructions.forEach((instruction) => {
  moveHead(instruction[0], Number(instruction[1]));
  moveTail();
});
