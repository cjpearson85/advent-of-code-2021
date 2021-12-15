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
      if (grid[i] === undefined) grid[i] = [];
      grid[i][x2] === undefined ? (grid[i][x2] = 1) : grid[i][x2]++;
    }
  } else if (y1 === y2) {
    const start = Math.min(x1, x2);
    const end = Math.max(x1, x2);

    for (let i = start; i <= end; i++) {
      if (grid[y2] === undefined) grid[y2] = [];
      grid[y2][i] === undefined ? (grid[y2][i] = 1) : grid[y2][i]++;
    }
  } else if (Math.abs(x1 - x2) === Math.abs(y1 - y2)) {
    const coordArr = [];
    const lineLength = Math.abs(x1 - x2);

    for (let i = 0; i <= lineLength; i++) {
      let coord = [];
      x1 > x2 ? coord.push(x1 - i) : coord.push(x1 + i);
      y1 > y2 ? coord.push(y1 - i) : coord.push(y1 + i);

      coordArr.push(coord);
    }

    coordArr.forEach((coord) => {
      const [x, y] = coord;

      if (grid[y] === undefined) grid[y] = [];
      grid[y][x] === undefined ? (grid[y][x] = 1) : grid[y][x]++;
    });
  }
});

let count = 0;

grid.forEach((row) => {
  row.forEach((number) => {
    number > 1 && count++;
  });
});

console.log("Part 2 answer:", count);
