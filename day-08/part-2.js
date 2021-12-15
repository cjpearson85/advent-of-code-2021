const { inputData, testData } = require("./input-data");

const format = inputData.split("\n").map((el) => el.split(" "));

const outputs = [];

const sortStr = (str) => str.split("").sort().join("");

format.forEach((line) => {
  const signal = line.slice(0, 10);
  const output = line.slice(-4);

  const valueRef = {};
  let digits = "";

  signal
    .sort((a, b) => a.length - b.length)
    .forEach((el) => {
      switch (el.length) {
        case 2:
          valueRef[1] = sortStr(el);
          break;
        case 3:
          valueRef[7] = sortStr(el);
          break;
        case 4:
          valueRef[4] = sortStr(el);
          break;
        case 7:
          valueRef[8] = sortStr(el);
          break;
        case 5:
          if (valueRef[1].split("").every((letter) => el.includes(letter))) {
            valueRef[3] = sortStr(el);
          } else if (
            valueRef[4].split("").filter((letter) => el.includes(letter))
              .length === 2
          ) {
            valueRef[2] = sortStr(el);
          } else {
            valueRef[5] = sortStr(el);
          }
          break;
        case 6:
          if (!valueRef[1].split("").every((letter) => el.includes(letter))) {
            valueRef[6] = sortStr(el);
          } else if (
            valueRef[4].split("").every((letter) => el.includes(letter))
          ) {
            valueRef[9] = sortStr(el);
          } else {
            valueRef[0] = sortStr(el);
          }
          break;
      }
    });

  output.forEach((el) => {
    const ref = Object.fromEntries(
      Object.entries(valueRef).map(([a, b]) => [b, a])
    );
    digits += ref[sortStr(el)];
  });
  outputs.push(digits);
});

const answer = outputs.reduce((sum, val) => sum + +val, 0);
console.log("Part 2 answer:", answer);
