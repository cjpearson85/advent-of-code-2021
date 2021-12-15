const { inputData, testData } = require("./input-data");

let data = inputData
  .split("\n")
  .map((line) => line.split("").map((octo) => +octo));

let count = 0;

const increaseSurrounding = ([x, y], data) => {
  if (x > 0 && y > 0) data[y - 1][x - 1] && data[y - 1][x - 1]++;
  if (y > 0) data[y - 1][x] && data[y - 1][x]++;
  if (x < data[0].length - 1 && y > 0)
    data[y - 1][x + 1] && data[y - 1][x + 1]++;
  if (x > 0) data[y][x - 1] && data[y][x - 1]++;
  if (x < data[0].length - 1) data[y][x + 1] && data[y][x + 1]++;
  if (x > 0 && y < data.length - 1) data[y + 1][x - 1] && data[y + 1][x - 1]++;
  if (y < data.length - 1) data[y + 1][x] && data[y + 1][x]++;
  if (x < data[0].length - 1 && y < data.length - 1)
    data[y + 1][x + 1] && data[y + 1][x + 1]++;
};

for (let i = 0; i < 100; i++) {
  data = data.map((line) => line.map((octo) => octo + 1));

  while (data.flat().filter((num) => num > 9).length > 0) {
    data.forEach((line, y) => {
      line.forEach((num, x) => {
        if (num > 9) {
          data[y][x] = 0;
          count++;
          increaseSurrounding([x, y], data);
        }
      });
    });
  }
}

console.log("Part 1 answer:", count);
