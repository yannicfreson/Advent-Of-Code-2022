console.log(require("fs").readFileSync("./input.txt", "utf8").trim().split("\n").map((line) =>(parseInt(line.split(",")[0].split("-")[0]) <=parseInt(line.split(",")[1].split("-")[0]) &&parseInt(line.split(",")[0].split("-")[1]) >= parseInt(line.split(",")[1].split("-")[1])) || (parseInt(line.split(",")[1].split("-")[0]) <= parseInt(line.split(",")[0].split("-")[0]) && parseInt(line.split(",")[1].split("-")[1]) >= parseInt(line.split(",")[0].split("-")[1])) ? 1 : 0).reduce((a, b) => a + b));
