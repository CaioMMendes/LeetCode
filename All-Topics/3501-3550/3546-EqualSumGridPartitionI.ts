const grid = [
  [1, 4],
  [2, 3],
]

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function (grid: number[][]) {
  const rowSum = grid.map((row) => row.reduce((acc, cur) => acc + cur, 0))
  let columnSum = []

  const rows = grid.length
  const columns = grid[0].length

  for (let i = 0; i < columns; i++) {
    let sum = 0
    for (let j = 0; j < rows; j++) {
      sum += grid[j][i]
    }
    columnSum.push(sum)
  }

  const total = rowSum.reduce((acc, cur) => acc + cur, 0)
  let accRow = 0

  for (let i = 1; i < rows; i++) {
    accRow += rowSum[i - 1]
    if (total - accRow === accRow) return true
  }

  let accColumn = 0
  for (let i = 1; i < columns; i++) {
    accColumn += columnSum[i - 1]
    if (total - accColumn === accColumn) return true
  }

  return false
}

console.log(canPartitionGrid(grid))
