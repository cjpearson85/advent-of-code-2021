const fs = require("fs");

let data = fs.readFileSync("./input.txt", "utf-8");

let [template, rules] = data.split("\n\n");

rules = rules.split("\n").map((line) => line.split(" -> "));

const refObj = Object.fromEntries(rules);
let pairs = { ...refObj };

for (let pair in pairs) {
  pairs[pair] = 0;
}

for (let i = 0; i < template.length - 1; i++) {
  let pair = template.slice(i, i + 2);
  pairs[pair]++;
}

const counts = {};

for (let i = 0; i < 40; i++) {
  const pairsCopy = { ...pairs };
  for (let pair in pairs) {
    if (pairs[pair] > 0) {
      const newPair1 = pair[0] + refObj[pair];
      const newPair2 = refObj[pair] + pair[1];

      pairsCopy[newPair1] += pairs[pair];
      pairsCopy[newPair2] += pairs[pair];
      pairsCopy[pair] -= pairs[pair];
    }
  }
  pairs = pairsCopy;
}

for (let pair in pairs) {
  counts[pair[0]]
    ? (counts[pair[0]] += pairs[pair])
    : (counts[pair[0]] = pairs[pair]);
  counts[pair[1]]
    ? (counts[pair[1]] += pairs[pair])
    : (counts[pair[1]] = pairs[pair]);
}

const countValues = Object.values(counts).map((val) => val / 2);

const max = Math.max(...countValues);
const min = Math.min(...countValues);

console.log("Part 2 answer", Math.round(max - min));
