const n = 2,
  grid = [
    [1, 2],
    [3, 4],
  ],
  rowShift = [1, 0],
  colShift = [0, 1]

/**
 * @param {number} n
 * @param {number[][]} grid
 * @param {number[]} rowShift
 * @param {number[]} colShift
 * @return {number[][]}
 */
var cyclicShift = function (
  n: number,
  grid: number[][],
  rowShift: number[],
  colShift: number[],
) {
  const shifted: number[][] = []

  for (let i = 0; i < rowShift.length; i++) {
    shifted.push([])
    for (let j = 0; j < n; j++) {
      shifted[i][j] = grid[i][(rowShift[i] + j) % n]
    }
  }

  grid = shifted
  const result: number[][] = []

  for (let i = 0; i < colShift.length; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) result.push([])
      result[j][i] = grid[(colShift[i] + j) % n][i]
    }
  }

  return result
}

console.log(cyclicShift(n, grid, rowShift, colShift))
