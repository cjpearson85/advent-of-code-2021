const { inputData, testData } = require("./input-data");

const data = inputData.split("\n").map((row) => row.split(""));
const lowPoints = [];

data.forEach((row, rowIndex) => {
  row.forEach((point, pointIndex) => {
    const neighbours = [];

    pointIndex !== 0 && neighbours.push(row[pointIndex - 1]);
    pointIndex !== row.length - 1 && neighbours.push(row[pointIndex + 1]);
    rowIndex !== 0 && neighbours.push(data[rowIndex - 1][pointIndex]);
    rowIndex !== data.length - 1 &&
      neighbours.push(data[rowIndex + 1][pointIndex]);

    neighbours.every((neighbour) => +neighbour > +point) &&
      lowPoints.push(+point + 1);
  });
});

const answer = lowPoints.reduce((sum, val) => sum + val);
console.log("Part 1 answer:", answer);
