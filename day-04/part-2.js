let { callSequence, boards } = require("./input-data");

callSequence = callSequence.split(",");

boards = boards.split("\n\n").map((board) => {
  return board.split("\n").map((row) => {
    return row.split(/(?<=\d) /).map((number) => number.trim());
  });
});

const winChecker = (board) => {
  const columns = [[], [], [], [], []];

  board.forEach((row) => {
    for (let i = 0; i < 5; i++) {
      columns[i].push(row[i]);
    }
  });

  return (
    columns.some((column) => {
      return column.every((number) => number === "x");
    }) ||
    board.some((row) => {
      return row.every((number) => number === "x");
    })
  );
};

const sumBoard = (board) => {
  return board.flat().reduce((sum, val) => {
    if (val !== "x") return sum + +val;
    else return sum;
  }, 0);
};

let answer;
let winningBoards = new Set();

callSequence.forEach((call) => {
  boards.forEach((board, index) => {
    board.forEach((row) => {
      const i = row.indexOf(call);
      if (i !== -1) {
        row[i] = "x";
      }
    });
    if (winChecker(board) && !winningBoards.has(index)) {
      if (winningBoards.size === boards.length - 1) {
        answer = sumBoard(board) * +call;
        winningBoards.add(index);
      } else {
        winningBoards.add(index);
      }
    }
  });
});

console.log("Part 2 answer:", answer);
