const grid = [
  [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0],
]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid: number[][]) {
  const rowMax = grid.map((row) => {
    return Math.max(...row)
  })

  const columnMax = []

  for (let i = 0; i < grid[0].length; i++) {
    let max = -1
    for (let j = 0; j < grid.length; j++) {
      if (max < grid[j][i]) max = grid[j][i]
    }
    columnMax.push(max)
  }

  let result = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let min = Math.min(rowMax[i], columnMax[j])
      result += min - grid[i][j]
    }
  }

  return result
}

console.log(maxIncreaseKeepingSkyline(grid))
