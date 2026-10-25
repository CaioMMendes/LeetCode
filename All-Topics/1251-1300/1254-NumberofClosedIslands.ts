const grid = [
  [1, 1, 1, 1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0],
]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid: number[][]) {
  const visited = new Set()

  let result = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const test = search([i, j])
      if (test) result++
    }
  }

  function search(coord: number[]) {
    const [i, j] = coord

    if (visited.has(`${i},${j}`)) return

    if (grid?.[i]?.[j] === 1) {
      visited.add(`${i},${j}`)
      return
    }

    if (grid?.[i]?.[j] === undefined) return false

    if (grid?.[i]?.[j] === undefined) return false

    visited.add(`${i},${j}`)

    const left = search([i - 1, j])
    const right = search([i + 1, j])
    const top = search([i, j + 1])
    const bot = search([i, j - 1])

    if (left === false || right === false || top === false || bot === false)
      return false

    return true
  }

  return result
}

closedIsland(grid)
