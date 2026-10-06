const board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
]

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board: string[][]) {
  const visited = new Set<string>()
  let check = true
  const rows = board.length
  const columns = board[0].length

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (board[i][j] === "X" || visited.has(`${i}-${j}`)) continue
      const list = isIsle([i, j], [])
      if (check) {
        closeIsles(list)
      } else {
        check = true
      }
    }
  }

  function closeIsles(arr: number[][] | undefined) {
    if (!arr) return
    for (const val of arr) {
      const [x, y] = val
      board[x][y] = "X"
    }
  }

  function isIsle(current: number[], all: number[][]) {
    const [x, y] = current
    if (visited.has(`${x}-${y}`)) return
    visited.add(`${x}-${y}`)
    if (board?.[x]?.[y] === undefined) {
      check = false
      return
    }
    if (board[x][y] === "X") return

    all.push(current)
    isIsle([x - 1, y], all)
    isIsle([x + 1, y], all)
    isIsle([x, y - 1], all)
    isIsle([x, y + 1], all)

    return all
  }
}

console.log(solve(board))
