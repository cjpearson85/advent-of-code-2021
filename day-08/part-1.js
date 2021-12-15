const { inputData, testData } = require("./input-data");

const outputs = inputData
  .split("\n")
  .map((el) => el.split(" "))
  .map((el) => el.slice(-4));

const uniqueLengths = [2, 3, 4, 7];
let count = 0;

outputs.forEach((el) => {
  el.forEach((el) => {
    uniqueLengths.includes(el.length) && count++;
  });
});

console.log("Part 1 answer:", count);
