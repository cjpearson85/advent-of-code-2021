const { testData, inputData } = require("./input-data");

let [data, instructions] = inputData.split("\n\n");

data = data.split("\n").map((coords) => coords.split(","));
instructions = instructions.split("\n").map((coords) => coords.split(" ")[2]);

const width = instructions[0].slice(2) * 2 + 1;
const height = instructions[1].slice(2) * 2 + 1;

let paper = [];

for (let i = 0; i < height; i++) {
  paper.push(Array(width).fill("."));
}

data.forEach(([x, y]) => {
  paper[y][x] = "#";
});

instructions.forEach((fold, i) => {
  if (fold[0] === "y") {
    const top = paper.slice(0, +fold.slice(2));
    const bottom = paper.slice(+fold.slice(2) + 1).reverse();

    top.forEach((line, y) => {
      line.forEach((dot, x) => {
        if (bottom[y][x] === "#") top[y][x] = "#";
      });
    });

    paper = top;
  } else {
    const left = paper.map((line) => line.slice(0, +fold.slice(2)));
    const right = paper.map((line) => line.slice(+fold.slice(2) + 1).reverse());

    left.forEach((line, y) => {
      line.forEach((dot, x) => {
        if (right[y][x] === "#") left[y][x] = "#";
      });
    });

    paper = left;
  }
  i === 0 &&
    console.log(
      "Part 1 answer:",
      paper.flat().filter((num) => num === "#").length
    );
});

console.log("Part 2 answer:\n");
console.log(paper.map((line) => line.join("")).join("\n"));
