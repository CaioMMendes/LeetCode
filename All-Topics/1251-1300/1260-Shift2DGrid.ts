const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  k = 1

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid: number[][], k: number) {
  const rows = grid.length
  const columns = grid[0].length

  const numberOfRowsChanged = Math.floor(k / columns)
  const numberOfColumnsChanged = k % columns

  const result: number[][] = []

  for (let i = 0; i < rows; i++) {
    result[i] = []
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const element = grid[i][j]

      let tempRow = (numberOfRowsChanged + i) % rows

      let tempColumn = (numberOfColumnsChanged + j) % columns
      if (numberOfColumnsChanged + j > columns - 1) {
        tempRow++
      }
      if (tempRow > rows - 1) {
        tempRow %= rows
      }
      result[tempRow][tempColumn] = element
    }
  }

  return result
}

console.log(shiftGrid(grid, k))
