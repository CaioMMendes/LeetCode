const grid = [
  [1, 2, 4],
  [3, 3, 1],
]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid: number[][]) {
  const rows = grid.length
  const columns = grid[0].length

  const count: Record<string, Record<string, number>> = {}
  let result = 0

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (!count[i]) count[i] = {}
      if (count[i][grid[i][j]]) {
        count[i][grid[i][j]]++
      } else {
        count[i][grid[i][j]] = 1
      }
    }
  }

  for (let j = 0; j < columns; j++) {
    let max = 0
    for (let i = 0; i < rows; i++) {
      const key = Math.max(...Object.keys(count[i]).map(Number))
      count[i][key]--
      if (count[i][key] <= 0) {
        delete count[i][key]
      }
      if (key > max) {
        max = key
      }
    }
    result += max
  }

  return result
}

console.log(deleteGreatestValue(grid))
