const grid = [
  [1, 2],
  [3, 4],
]

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function (grid: number[][]) {
  const result = []

  for (let i = 0; i < grid.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < grid[0].length; j += 2) {
        result.push(grid[i][j])
      }
    } else {
      if (grid[0].length % 2 === 0) {
        for (let j = grid[0].length - 1; j >= 0; j -= 2) {
          result.push(grid[i][j])
        }
      } else {
        for (let j = grid[0].length - 2; j >= 0; j -= 2) {
          result.push(grid[i][j])
        }
      }
    }
  }

  return result
}

console.log(zigzagTraversal(grid))
