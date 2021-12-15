const { inputData, testData } = require("./input-data");

const growthCalc = (data, days) => {
  data = data.split(",").map(Number);

  while (days > 0) {
    data.forEach((fish, i) => {
      if (fish === 0) {
        data[i] = 6;
        data.push(8);
      } else {
        data[i]--;
      }
    });
    days--;
  }

  return data.length;
};

const answer = growthCalc(inputData, 80);
console.log("Part 1 answer:", answer);
