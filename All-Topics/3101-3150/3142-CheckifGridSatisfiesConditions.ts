const grid = [
  [1, 0, 2],
  [1, 0, 2],
]

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function (grid: number[][]) {
  const rows = grid.length
  const columns = grid[0].length

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const element = grid[i][j]
      if (element === grid[i]?.[j + 1] && grid[i]?.[j + 1] !== undefined)
        return false
      if (element !== grid?.[i + 1]?.[j] && grid?.[i + 1]?.[j] !== undefined)
        return false
    }
  }
  return true
}

console.log(satisfiesConditions(grid))
