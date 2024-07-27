const board = [
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", "R", ".", ".", ".", "p"],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
]

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  const rows = board.length
  const columns = board[0].length

  let rook
  let result = 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const element = board[i][j]
      if (element === "R") {
        rook = [i, j]
        break
      }
    }
  }

  for (let i = rook[0] - 1; i >= 0; i--) {
    const element = board[i][rook[1]]
    const lowerCaseElement = board[i][rook[1]].toLowerCase()
    if (element === ".") continue
    if (element === lowerCaseElement) {
      result++
      break
    } else {
      break
    }
  }
  for (let i = rook[0] + 1; i < rows; i++) {
    const element = board[i][rook[1]]
    const lowerCaseElement = board[i][rook[1]].toLowerCase()
    if (element === ".") continue
    if (element === lowerCaseElement) {
      result++
      break
    } else {
      break
    }
  }
  for (let i = rook[1] - 1; i >= 0; i--) {
    const element = board[rook[0]][i]
    const lowerCaseElement = board[rook[0]][i].toLowerCase()
    if (element === ".") continue
    if (element === lowerCaseElement) {
      result++
      break
    } else {
      break
    }
  }
  for (let i = rook[1] + 1; i < rows; i++) {
    const element = board[rook[0]][i]
    const lowerCaseElement = board[rook[0]][i].toLowerCase()
    if (element === ".") continue
    if (element === lowerCaseElement) {
      result++
      break
    } else {
      break
    }
  }

  return result
}

console.log(numRookCaptures(board))
