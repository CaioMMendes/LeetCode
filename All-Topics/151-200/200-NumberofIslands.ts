const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
]

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid: string[][]) {
  const visitedCoords = new Set()
  let result = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const key = `${i}-${j}`
      if (visitedCoords.has(key) || grid[i][j] === "0") continue
      result++

      checkIsLand([i, j])
    }
  }

  return result

  function checkIsLand(coord: number[]) {
    const [i, j] = coord

    if (
      grid?.[i]?.[j] === undefined ||
      grid[i][j] === "0" ||
      visitedCoords.has(`${i}-${j}`)
    )
      return

    visitedCoords.add(`${i}-${j}`)

    checkIsLand([i, j + 1])
    checkIsLand([i, j - 1])
    checkIsLand([i - 1, j])
    checkIsLand([i + 1, j])
  }
}

console.log(numIslands(grid))
