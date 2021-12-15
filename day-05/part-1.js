const { inputData, testData } = require("./input-data");

const formattedData = inputData
  .split("\n")
  .map((coords) => coords.match(/\d+/g));

const grid = [];

formattedData.forEach((coords) => {
  coords = coords.map(Number);
  const [x1, y1, x2, y2] = coords;

  if (x1 === x2) {
    const start = Math.min(y1, y2);
    const end = Math.max(y1, y2);

    for (let i = start; i <= end; i++) {
      if (grid[x1] === undefined) grid[x1] = [];
      grid[x1][i] === undefined ? (grid[x1][i] = 1) : grid[x1][i]++;
    }
  } else if (y1 === y2) {
    const start = Math.min(x1, x2);
    const end = Math.max(x1, x2);

    for (let i = start; i <= end; i++) {
      if (grid[i] === undefined) grid[i] = [];
      grid[i][y1] === undefined ? (grid[i][y1] = 1) : grid[i][y1]++;
    }
  } else {
  }
});

let count = 0;

grid.forEach((row) => {
  row.forEach((number) => {
    number > 1 && count++;
  });
});

console.log("Part 1 answer:", count);
