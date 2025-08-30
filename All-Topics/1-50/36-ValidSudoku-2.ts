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
]

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board: string[][]) {
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      if (!checkSquare(i, j)) return false
    }
  }

  if (!checkRows()) return false
  if (!checkCollumns()) return false

  return true

  function checkCollumns() {
    for (let i = 0; i < 9; i++) {
      const set = new Set()
      for (let j = 0; j < 9; j++) {
        if (board[j][i] === ".") continue
        if (set.has(board[j][i])) return false
        set.add(board[j][i])
      }
    }

    return true
  }

  function checkRows() {
    for (let i = 0; i < 9; i++) {
      const set = new Set()
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === ".") continue
        if (set.has(board[i][j])) return false
        set.add(board[i][j])
      }
    }

    return true
  }

  function checkSquare(row: number, col: number) {
    const set = new Set()
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[row + i][col + j] === ".") continue
        if (set.has(board[row + i][col + j])) return false
        set.add(board[row + i][col + j])
      }
    }
    return true
  }
}

console.log(isValidSudoku(board))
