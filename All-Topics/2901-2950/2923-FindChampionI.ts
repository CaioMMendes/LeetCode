const grid = [
  [0, 1],
  [0, 0],
]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function (grid: number[][]) {
  for (let i = 0; i < grid.length; i++) {
    let countZeros = 0
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === 0) {
        countZeros++
        if (countZeros > 1) break
      }
    }
    if (countZeros <= 1) return i
  }
}

console.log(findChampion(grid))
