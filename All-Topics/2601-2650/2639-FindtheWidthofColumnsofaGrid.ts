const grid = [[1], [22], [333]]

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function (grid: number[][]) {
  const columns = grid[0].length
  const rows = grid.length
  const result = []

  for (let i = 0; i < columns; i++) {
    let max = 0
    for (let j = 0; j < rows; j++) {
      const string = String(grid[j][i])
      if (string.length > max) max = string.length
    }
    result.push(max)
  }

  return result
}

console.log(findColumnWidth(grid))
