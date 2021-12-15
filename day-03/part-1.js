const { data, testData } = require("./input-data");

const numArr = data.split("\n");
let gamma = "";
let epsilon = "";

for (let i = 0; i < numArr[0].length; i++) {
  const arr2 = numArr
    .map((number) => number[i])
    .filter((number) => number === "0");
  if (arr2.length > numArr.length / 2) {
    gamma += "0";
    epsilon += "1";
  } else {
    gamma += "1";
    epsilon += "0";
  }
}

gamma = parseInt(gamma, 2);
epsilon = parseInt(epsilon, 2);

console.log("Part 1 answer:", gamma * epsilon);
