const { inputData, testData } = require("./input-data");

const data = inputData.split(",").map(Number);

const calcMean = (data) => {
  return Math.floor(data.reduce((sum, val) => sum + val) / data.length);
};

const fuelCounter = (data) => {
  let count = 0;
  const mean = calcMean(data);

  data.forEach((crab) => {
    const difference = Math.abs(crab - mean);
    for (let i = 1; i <= difference; i++) {
      count += i;
    }
  });

  return count;
};

const answer = fuelCounter(data);
console.log("Part 2 answer:", answer);
