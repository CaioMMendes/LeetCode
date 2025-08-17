const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid: number[][]) {
  const visited = new Set()
  let max = 0
  const rows = grid.length
  const columns = grid[0].length

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === 0 || visited.has(`${i},${j}`)) continue

      const sum = runIsle(i, j)
      if (sum > max) max = sum
    }
  }

  return max

  function runIsle(i: number, j: number) {
    const key = `${i},${j}`
    if (visited.has(key)) return 0
    let sum = 0

    visited.add(key)
    if (grid?.[i - 1]?.[j] === 1) {
      sum += runIsle(i - 1, j)
    }

    if (grid?.[i + 1]?.[j] === 1) {
      sum += runIsle(i + 1, j)
    }

    if (grid?.[i]?.[j - 1] === 1) {
      sum += runIsle(i, j - 1)
    }

    if (grid?.[i]?.[j + 1] === 1) {
      sum += runIsle(i, j + 1)
    }

    return sum + 1
  }
}

console.log(maxAreaOfIsland(grid))
