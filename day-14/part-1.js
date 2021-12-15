const fs = require("fs");

let data = fs.readFileSync("./input.txt", "utf-8");

let [template, rules] = data.split("\n\n");

rules = rules.split("\n").map((line) => line.split(" -> "));

const refObj = Object.fromEntries(rules);

for (let j = 0; j < 10; j++) {
  let polymer = template[0];
  for (let i = 0; i < template.length - 1; i++) {
    let pair = template.slice(i, i + 2);
    polymer += refObj[pair] + template[i + 1];
  }
  template = polymer;
}

const counts = {};
const letters = template.split("");

letters.forEach((letter) => {
  counts[letter] ? counts[letter]++ : (counts[letter] = 1);
});

const countValues = Object.values(counts);

const max = Math.max(...countValues);
const min = Math.min(...countValues);

console.log("Part 1 answer:", max - min);
