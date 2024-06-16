const grid = [[1]]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid: number[][]) {
  const rows = grid.length
  const columns = grid[0].length

  let result = 0

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const element = grid[i][j]
      if (element > 0) {
        result += 2
      }
      if (i > 0) {
        if (element > grid[i - 1][j]) {
          result += element - grid[i - 1][j]
        }
      }
      if (i < rows - 1) {
        if (element > grid[i + 1][j]) {
          result += element - grid[i + 1][j]
        }
      }
      if (j > 0) {
        if (element > grid[i][j - 1]) {
          result += element - grid[i][j - 1]
        }
      }
      if (j < columns - 1) {
        if (element > grid[i][j + 1]) {
          result += element - grid[i][j + 1]
        }
      }

      if (i === 0) {
        result += grid[i][j]
      }
      if (j === 0) {
        result += grid[i][j]
      }
      if (i === rows - 1) {
        result += grid[i][j]
      }
      if (j === columns - 1) {
        result += grid[i][j]
      }
    }
  }

  return result
}

console.log(surfaceArea(grid))
