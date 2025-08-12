const grid = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ],
  x = 1,
  y = 0,
  k = 3

/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function (
  grid: number[][],
  x: number,
  y: number,
  k: number
) {
  const result = grid.map((row) => [...row])

  for (let i = x; i < x + k; i++) {
    for (let j = y; j < y + k; j++) {
      result[i][j] = grid[x + k - i + x - 1]?.[j]
    }
  }

  return result
}

console.log(reverseSubmatrix(grid, x, y, k))
