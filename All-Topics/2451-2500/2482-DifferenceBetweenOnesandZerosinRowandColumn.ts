const grid = [
  [1, 1, 1],
  [1, 1, 1],
]

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid: number[][]) {
  const oneRow = new Array(grid.length).fill(0)
  const oneColumn = new Array(grid[0].length).fill(0)

  const zeroRow = new Array(grid.length).fill(0)
  const zeroColumn = new Array(grid[0].length).fill(0)

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const element = grid[i][j]

      if (element === 1) {
        oneRow[i]++
        oneColumn[j]++
      } else if (element === 0) {
        zeroRow[i]++
        zeroColumn[j]++
      }
    }
  }

  const result = []

  for (let i = 0; i < grid.length; i++) {
    const row = []

    for (let j = 0; j < grid[0].length; j++) {
      const dif = oneRow[i] + oneColumn[j] - zeroRow[i] - zeroColumn[j]
      row.push(dif)
    }
    result.push(row)
  }

  return result
}

console.log(onesMinusZeros(grid))
