const fs = require("fs");

let data = fs.readFileSync("./input.txt", "utf-8").split(" ");

const sonarSweep = (data) => {
  return data.filter((number, i) => {
    return (i = 0 ? false : +number > +data[i - 1]);
  }).length;
};

const sonarSweepAdv = (data) => {
  const windows = data
    .map((number, i) => {
      return data.slice(i, i + 3).reduce((sum, val) => +sum + +val);
    })
    .slice(0, -2);

  return sonarSweep(windows);
};

const result1 = sonarSweep(data);
const result2 = sonarSweepAdv(data);

console.log("Part 1 answer:", result1);
console.log("Part 2 answer:", result2);
