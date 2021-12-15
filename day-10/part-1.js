const { inputData, testData } = require("./input-data");

const refObj = {
  ")": 3,
  "]": 57,
  "}": 1197,
  ">": 25137,
};

const data = inputData.split("\n");

const reduceLine = (line) => {
  while (line.search(/(\(\)|\{\}|\[\]|\<\>)/) !== -1) {
    line = line.replace(/(\(\)|\{\}|\[\]|\<\>)/, "");
  }

  return line;
};

const findBracketPairs = (data) => {
  data = data.map((line) => {
    return reduceLine(line);
  });

  let total = 0;
  data.forEach((line) => {
    const i = line.search(/(\)|\}|\]|\>)/);
    if (i !== -1) total += refObj[line[i]];
  });

  return total;
};

const answer = findBracketPairs(data);
console.log("Part 1 answer:", answer);
