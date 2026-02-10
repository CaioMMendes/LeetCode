const board = [
    ["B", "1", "E", "1", "B"],
    ["B", "1", "M", "1", "B"],
    ["B", "1", "1", "1", "B"],
    ["B", "B", "B", "B", "B"],
  ],
  click = [1, 2]

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board: string[][], click: number[]) {
  const opened = new Set()
  const realBoard = generateRealBoard(board)
  const lines = board.length
  const columns = board[0].length

  openCell(click[0], click[1])

  function generateRealBoard(board: string[][]) {
    const realBoard = []

    for (let i = 0; i < board.length; i++) {
      const line = []

      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] !== "E" && board[i][j] !== "M") {
          opened.add(`${i}-${j}`)
        }

        if (board[i][j] === "M") {
          line.push(-1)
          continue
        }

        let countBombs = 0
        if (board?.[i - 1]?.[j] === "M") countBombs++
        if (board?.[i + 1]?.[j] === "M") countBombs++
        if (board?.[i]?.[j - 1] === "M") countBombs++
        if (board?.[i]?.[j + 1] === "M") countBombs++
        if (board?.[i + 1]?.[j + 1] === "M") countBombs++
        if (board?.[i - 1]?.[j - 1] === "M") countBombs++
        if (board?.[i - 1]?.[j + 1] === "M") countBombs++
        if (board?.[i + 1]?.[j - 1] === "M") countBombs++
        line.push(countBombs)
      }

      realBoard.push(line)
    }

    return realBoard
  }

  function openCell(x: number, y: number) {
    const key = `${x}-${y}`

    if (x < 0 || x > lines - 1) return
    if (y < 0 || y > columns - 1) return
    if (opened.has(key)) return
    opened.add(key)

    if (realBoard?.[x]?.[y] !== 0) {
      return
    }

    openCell(x - 1, y)
    openCell(x + 1, y)
    openCell(x, y - 1)
    openCell(x, y + 1)
    openCell(x - 1, y - 1)
    openCell(x - 1, y + 1)
    openCell(x + 1, y - 1)
    openCell(x + 1, y + 1)
  }

  return realBoard.map((line, x) => {
    return line.map((val, y) => {
      const key = `${x}-${y}`
      const isOpened = opened.has(key)
      if (isOpened) {
        if (val === 0) return "B"
        if (val === -1) return "X"
        return String(val)
      }

      if (val === -1) return "M"
      return "E"
    })
  })
}

console.log(board, click)
