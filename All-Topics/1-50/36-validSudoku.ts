const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board: string[][]) => {
  let lineNumber = 0;
  for (let k = 0; k < board.length; k++) {
    const filteredx = board[k].filter((string) => string !== ".");
    const uniquex = [...new Set(filteredx)];
    if (uniquex.length !== filteredx.length) {
      return false;
    }

    const filteredy = [
      board[0][k],
      board[1][k],
      board[2][k],
      board[3][k],
      board[4][k],
      board[5][k],
      board[6][k],
      board[7][k],
      board[8][k],
    ].filter((string) => string !== ".");
    const uniquey = [...new Set(filteredy)];
    if (uniquey.length !== filteredy.length) {
      return false;
    }

    if (k % 3 === 0 && k !== 0) {
      lineNumber = 0;
    }
    const kx = Math.floor(k / 3) * 3;

    const filteredBox = [
      board[0 + kx][lineNumber],
      board[1 + kx][lineNumber],
      board[2 + kx][lineNumber],
      board[0 + kx][lineNumber + 1],
      board[1 + kx][lineNumber + 1],
      board[2 + kx][lineNumber + 1],
      board[0 + kx][lineNumber + 2],
      board[1 + kx][lineNumber + 2],
      board[2 + kx][lineNumber + 2],
    ].filter((string) => string !== ".");

    const uniqueBox = [...new Set(filteredBox)];
    if (uniqueBox.length !== filteredBox.length) {
      return false;
    }

    lineNumber += 3;
  }
  return true;
};

console.log(isValidSudoku(board));
