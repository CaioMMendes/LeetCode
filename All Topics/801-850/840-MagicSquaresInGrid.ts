const grid = [
  [4, 3, 8, 4],
  [9, 5, 1, 9],
  [2, 7, 6, 2],
]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid: number[][]) {
  const rows = grid.length
  const columns = grid[0].length
  const rowsFor = rows - 2
  const columnsFor = columns - 2
  let result = 0

  for (let i = 0; i < rowsFor; i++) {
    for (let j = 0; j < columnsFor; j++) {
      const set = new Set([
        grid[i][j],
        grid[i][j + 1],
        grid[i][j + 2],
        grid[i + 1][j],
        grid[i + 1][j + 1],
        grid[i + 1][j + 2],
        grid[i + 2][j],
        grid[i + 2][j + 1],
        grid[i + 2][j + 2],
      ])
      if (set.size !== 9) continue
      let error = false
      for (let i = 1; i <= 9; i++) {
        if (!set.has(i)) {
          error = true
          break
        }
      }
      if (error) continue

      const rowOne = grid[i][j] + grid[i][j + 1] + grid[i][j + 2]
      const rowTwo = grid[i + 1][j] + grid[i + 1][j + 1] + grid[i + 1][j + 2]
      const rowThree = grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2]

      const columnOne = grid[i][j] + grid[i + 1][j] + grid[i + 2][j]
      const columnTwo = grid[i][j + 1] + grid[i + 1][j + 1] + grid[i + 2][j + 1]
      const columnThree =
        grid[i][j + 2] + grid[i + 1][j + 2] + grid[i + 2][j + 2]

      const diagonalOne = grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2]
      const diagonalTwo = grid[i + 2][j] + grid[i + 1][j + 1] + grid[i][j + 2]

      if (
        rowOne === rowTwo &&
        rowTwo === rowThree &&
        rowThree === columnOne &&
        columnOne === columnTwo &&
        columnTwo === columnThree &&
        columnThree === diagonalOne &&
        diagonalOne === diagonalTwo
      ) {
        result++
      }
    }
  }

  return result
}

console.log(numMagicSquaresInside(grid))
