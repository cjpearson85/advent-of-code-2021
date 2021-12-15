const { inputData, testData } = require("./input-data");

const refObj = {
  "(": 1,
  "[": 2,
  "{": 3,
  "<": 4,
};

const data = inputData.split("\n");

const reduceLine = (line) => {
  while (line.search(/(\(\)|\{\}|\[\]|\<\>)/) !== -1) {
    line = line.replace(/(\(\)|\{\}|\[\]|\<\>)/, "");
  }

  return line;
};

const findBracketPairs = (data) => {
  data = data
    .map((line) => {
      return reduceLine(line);
    })
    .filter((line) => line.search(/(\)|\}|\]|\>)/) === -1);

  const i = Math.floor(data.length / 2);

  return data
    .map((line) => {
      return line
        .split("")
        .reverse()
        .reduce((sum, val) => sum * 5 + refObj[val], 0);
    })
    .sort((a, b) => a - b)[i];
};

const answer = findBracketPairs(data);
console.log("Part 2 answer:", answer);
