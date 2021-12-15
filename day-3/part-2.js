const { data, testData } = require("./input-data");

let numArr = data.split("\n");

const findRating = (type, data) => {
  let i = 0;

  while (data.length > 1) {
    const arr2 = data
      .map((number) => number[i])
      .filter((number) => number === "0");

    if (arr2.length > data.length / 2) {
      if (type === "oxygen") {
        data = data.filter((number) => number[i] === "0");
      } else {
        data = data.filter((number) => number[i] === "1");
      }
    } else {
      if (type === "oxygen") {
        data = data.filter((number) => number[i] === "1");
      } else {
        data = data.filter((number) => number[i] === "0");
      }
    }
    i++;
  }
  return parseInt(data[0], 2);
};

const oxygen = findRating("oxygen", numArr);
const co2 = findRating("co2", numArr);

console.log("Part 2 answer:", oxygen * co2);
