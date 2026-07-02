const grid = [
    [0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 0, 1],
    [0, 0, 1, 0, 1, 0],
  ],
  health = 3

/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function (grid: number[][], health: number) {
  const visited: number[][][] = []
  const rows = grid.length
  const columns = grid[0].length

  for (let i = 0; i < grid.length; i++) {
    const row = []
    for (let j = 0; j < grid[0].length; j++) {
      row.push([0, 0])
    }
    visited.push(row)
  }
  let result = false

  move([0, 0], health)

  function move([i, j]: number[], currentHealth: number) {
    if (grid[i][j] === 1) {
      currentHealth = currentHealth - 1
      if (currentHealth === 0) return
    }

    if (visited[i][j][0] === 1 && visited[i][j][1] >= currentHealth) return
    visited[i][j][0] = 1
    visited[i][j][1] = currentHealth

    if (rows - 1 === i && columns - 1 === j) {
      result = true
      return
    }

    //baixo
    if (grid?.[i - 1]?.[j] !== undefined) {
      move([i - 1, j], currentHealth)
    }

    //top
    if (grid?.[i + 1]?.[j] !== undefined) {
      move([i + 1, j], currentHealth)
    }

    //left
    if (grid?.[i]?.[j - 1] !== undefined) {
      move([i, j - 1], currentHealth)
    }

    //right
    if (grid?.[i]?.[j + 1] !== undefined) {
      move([i, j + 1], currentHealth)
    }
  }

  return result
}

console.log(findSafeWalk(grid, health))
