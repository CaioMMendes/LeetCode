const grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid: number[][]) {
  const matrixLength = grid.length
  const vectorLength = grid[0].length
  let result = 0
  for (let i = 0; i < matrixLength; i++) {
    for (let j = 0; j < vectorLength; j++) {
      const element = grid[i][j]
      if (grid[i][j - 1] !== 1 && element === 1) result++
      if (grid[i][j + 1] !== 1 && element === 1) result++
      if (i === 0) {
        if (element === 1) result++
      } else if (grid[i - 1][j] !== 1 && element === 1) result++
      if (i === matrixLength - 1) {
        if (element === 1) result++
      } else if (grid[i + 1][j] !== 1 && element === 1) result++
    }
  }

  return result
}

console.log(islandPerimeter(grid))
