const grid = [
  [1, 2],
  [3, 4],
]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid: number[][]) {
  let top = 0
  let left = 0
  let right = 0
  const rows = grid.length
  const columns = grid[0].length

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] > 0) top++
    }
  }

  for (let i = 0; i < rows; i++) {
    let max = grid[i][0]
    for (let j = 0; j < columns; j++) {
      if (max < grid[i][j]) {
        max = grid[i][j]
      }
    }
    left += max
  }

  for (let i = 0; i < columns; i++) {
    let max = grid[0][i]
    for (let j = 0; j < rows; j++) {
      if (max < grid[j][i]) {
        max = grid[j][i]
      }
    }
    right += max
  }

  return top + left + right
}

console.log(projectionArea(grid))
