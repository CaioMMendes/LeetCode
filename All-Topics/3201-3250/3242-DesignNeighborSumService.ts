/**
 * @param {number[][]} grid
 */
var NeighborSum = function (this: any, grid: number[][]) {
  this.grid = grid
}

/**
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.adjacentSum = function (value: number) {
  const columns = this.grid[0].length
  const rows = this.grid.length
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const element = this.grid[i][j]
      if (element === value) {
        let sum = i > 0 ? this.grid[i - 1][j] : 0
        sum += i < rows - 1 ? this.grid[i + 1][j] : 0
        sum += j > 0 ? this.grid[i][j - 1] : 0
        sum += j < columns - 1 ? this.grid[i][j + 1] : 0
        return sum
      }
    }
  }
  return 0
}

/**
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.diagonalSum = function (value: number) {
  const columns = this.grid[0].length
  const rows = this.grid.length
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const element = this.grid[i][j]
      if (element === value) {
        let sum = i > 0 && j > 0 ? this.grid[i - 1][j - 1] : 0
        sum += i < rows - 1 && j > 0 ? this.grid[i + 1][j - 1] : 0
        sum += i > 0 && j < columns - 1 ? this.grid[i - 1][j + 1] : 0
        sum += i < rows - 1 && j < columns - 1 ? this.grid[i + 1][j + 1] : 0
        return sum
      }
    }
  }
  return 0
}
