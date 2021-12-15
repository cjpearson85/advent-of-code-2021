let { callSequence, boards } = require("./input-data");

callSequence = callSequence.split(",");

boards = boards.split("\n\n").map((board) => {
  return board.split("\n").map((row) => {
    return row.split(/(?<=\d) /).map((number) => number.trim());
  });
});

const rowChecker = (row) => {
  return row.every((number) => number === "x");
};

const columnChecker = (board) => {
  const columns = [[], [], [], [], []];

  board.forEach((row) => {
    for (let i = 0; i < 5; i++) {
      columns[i].push(row[i]);
    }
  });

  return columns.some((column) => {
    return column.every((number) => number === "x");
  });
};

const sumBoard = (board) => {
  return board.flat().reduce((sum, val) => {
    if (val !== "x") return sum + +val;
    else return sum;
  }, 0);
};

let answer;
let flag = false;

callSequence.forEach((call) => {
  boards.forEach((board) => {
    board.forEach((row) => {
      const i = row.indexOf(call);
      if (i !== -1) {
        row[i] = "x";
        if (rowChecker(row) && !flag) {
          answer = sumBoard(board) * +call;
          flag = true;
        }
      }
    });
    if (columnChecker(board) && !flag) {
      answer = sumBoard(board) * +call;
      flag = true;
    }
  });
});

console.log("Part 1 answer:", answer);
