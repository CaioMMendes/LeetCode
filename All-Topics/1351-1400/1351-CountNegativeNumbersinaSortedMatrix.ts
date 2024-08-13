const grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
  [1, -1, -1, -1],
]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  const rows = grid.length
  const columns = grid[0].length
  let result = 0

  for (let i = 0; i < rows; i++) {
    let min = 0
    let max = columns - 1
    let mid = Math.floor((max + min) / 2)

    let number = grid[i][mid]

    if (grid[i][max] >= 0) {
      continue
    } else if (grid[i][0] < 0) {
      result += columns
      continue
    }

    while (true) {
      if (number >= 0) {
        min = mid + 1
      } else {
        max = mid - 1
      }
      if (number >= 0 && grid[i][mid + 1] < 0) {
        result += columns - mid - 1
        break
      }
      mid = Math.floor((max + min) / 2)
      number = grid[i][mid]
    }
  }

  return result
}

console.log(countNegatives(grid))
