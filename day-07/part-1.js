const { inputData, testData } = require("./input-data");

const data = inputData.split(",").map(Number);

const calcMedian = (data) => {
  data = data.sort((a, b) => a - b);
  const middle = data.length / 2;

  if (data.length % 2 === 0) {
    return (
      data.slice(middle - 1, middle + 1).reduce((sum, val) => sum + val) / 2
    );
  } else {
    return data[middle];
  }
};

const fuelCounter = (data) => {
  let count = 0;
  const median = calcMedian(data);

  data.forEach((crab) => {
    count += Math.abs(crab - median);
  });

  return count;
};

const answer = fuelCounter(data);
console.log("Part 1 answer:", answer);
