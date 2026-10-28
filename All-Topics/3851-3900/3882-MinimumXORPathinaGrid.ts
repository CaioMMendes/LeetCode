const grid = [
  [1, 2],
  [3, 4],
]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function (grid: number[][]) {
  const paths: Set<number>[][] = []
  const [rows, columns] = [grid.length, grid[0].length]

  for (let i = 0; i < rows; i++) {
    const row: Set<number>[] = []
    for (let j = 0; j < columns; j++) {
      const path: Set<number> = new Set()

      if (j === 0 && i === 0) {
        path.add(grid[i][j])
      }

      if (i > 0) {
        for (const val of paths[i - 1][j]) {
          path.add(val ^ grid[i][j])
        }
      }

      if (j > 0) {
        for (const val of row[j - 1]) {
          path.add(val ^ grid[i][j])
        }
      }
      row.push(path)
    }
    paths.push(row)
  }

  return Math.min(...paths[rows - 1][columns - 1])
}

console.log(minCost(grid))
