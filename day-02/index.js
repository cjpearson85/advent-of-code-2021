const data = require("./input-data").split(" ");

const positionFinder = (data) => {
  let positionX = 0;
  let positionY = 0;

  data.forEach((el, i) => {
    if (i % 2 === 0) {
      switch (el) {
        case "forward":
          positionX += +data[i + 1];
          break;
        case "up":
          positionY -= +data[i + 1];
          break;
        case "down":
          positionY += +data[i + 1];
          break;
      }
    }
  });

  return positionX * positionY;
};

const positionFinderAdv = (data) => {
  let positionX = 0;
  let positionY = 0;
  let aim = 0;

  data.forEach((el, i) => {
    const num = +data[i + 1];
    if (i % 2 === 0) {
      switch (el) {
        case "forward":
          positionX += num;
          positionY += num * aim;
          break;
        case "up":
          aim -= num;
          break;
        case "down":
          aim += num;
          break;
      }
    }
  });

  return positionX * positionY;
};

const result1 = positionFinder(data);
const result2 = positionFinderAdv(data);

console.log("Part 1 answer:", result1);
console.log("Part 2 answer:", result2);
