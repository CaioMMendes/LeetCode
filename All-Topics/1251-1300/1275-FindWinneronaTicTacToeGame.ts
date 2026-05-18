const moves = [
  [0, 0],
  [2, 0],
  [1, 1],
  [2, 1],
  [2, 2],
]

/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves: number[][]) {
  const board = makeBoard()
  return checkWin()

  function makeBoard() {
    const board = Array.from({ length: 3 }, () => Array(3).fill(""))

    for (let i = 0; i < moves.length; i++) {
      const [x, y] = moves[i]

      board[x][y] = i % 2 === 0 ? "X" : "O"
    }

    return board
  }

  function checkWin() {
    let count = 0

    for (const row of board) {
      const cleanRow = row.filter((val) => val)
      const set = new Set(cleanRow)
      count += cleanRow.length
      if (set.size > 1) continue
      if (cleanRow.length === 3) return cleanRow[0] === "X" ? "A" : "B"
    }

    for (let i = 0; i < 3; i++) {
      const cleanColumn = []
      for (let j = 0; j < 3; j++) {
        const element = board[j][i]
        if (element !== "") {
          cleanColumn.push(element)
        }
      }
      const set = new Set(cleanColumn)
      if (set.size > 1) continue
      if (cleanColumn.length === 3) return cleanColumn[0] === "X" ? "A" : "B"
    }

    if (
      board[0][0] !== "" &&
      board[0][0] == board[1][1] &&
      board[2][2] == board[1][1]
    )
      return board[1][1] === "X" ? "A" : "B"

    if (
      board[0][2] !== "" &&
      board[0][2] == board[1][1] &&
      board[2][0] == board[1][1]
    )
      return board[1][1] === "X" ? "A" : "B"

    return count === 9 ? "Draw" : "Pending"
  }
}

console.log(tictactoe(moves))
