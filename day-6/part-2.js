const { inputData, testData } = require("./input-data");

const growthCalc = (data, days) => {
  data = data.split(",").map(Number);

  let dataObj = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
  };

  data.forEach((fish) => {
    switch (fish) {
      case 1:
        dataObj[1]++;
        break;
      case 2:
        dataObj[2]++;
        break;
      case 3:
        dataObj[3]++;
        break;
      case 4:
        dataObj[4]++;
        break;
      case 5:
        dataObj[5]++;
        break;
    }
  });

  while (days > 0) {
    dataObj = {
      0: dataObj[1],
      1: dataObj[2],
      2: dataObj[3],
      3: dataObj[4],
      4: dataObj[5],
      5: dataObj[6],
      6: dataObj[7] + dataObj[0],
      7: dataObj[8],
      8: dataObj[0],
    };
    days--;
  }

  return Object.values(dataObj).reduce((sum, val) => sum + val);
};

const answer = growthCalc(inputData, 256);
console.log("Part 2 answer:", answer);
