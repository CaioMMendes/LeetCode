const grid = [
  [9, 9, 8, 1],
  [5, 6, 2, 6],
  [8, 2, 6, 4],
  [6, 2, 2, 2],
]

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid: number[][]) {
  const rows = grid.length
  const columns = grid[0].length
  const result: number[][] = []

  for (let i = 0; i < rows - 2; i++) {
    const row: number[] = []
    for (let j = 0; j < columns - 2; j++) {
      row.push(
        Math.max(
          grid[i][j],
          grid[i][j + 1],
          grid[i][j + 2],
          grid[i + 1][j],
          grid[i + 1][j + 1],
          grid[i + 1][j + 2],
          grid[i + 2][j],
          grid[i + 2][j + 1],
          grid[i + 2][j + 2]
        )
      )
    }
    result.push(row)
  }
  return result
}

console.log(largestLocal(grid))
