const grid = [
  [3, 2],
  [1, 3],
  [3, 4],
  [0, 1],
]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function (grid: number[][]) {
  const columns = grid[0].length
  const rows = grid.length
  let result = 0

  for (let i = 0; i < columns; i++) {
    let current = grid[0][i]

    for (let j = 1; j < rows; j++) {
      const element = grid[j][i]
      if (element > current) {
        current = element
        continue
      }

      const dif = current + 1 - element
      result += dif
      current++
    }
  }

  return result
}

console.log(minimumOperations(grid))
