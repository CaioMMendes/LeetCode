const grid = [
  ["B", "W", "B"],
  ["B", "W", "W"],
  ["B", "W", "B"],
]

/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function (grid: string[][]) {
  const rows = grid.length
  const columns = grid[0].length

  for (let i = 0; i < rows - 1; i++) {
    for (let j = 0; j < columns - 1; j++) {
      let sum = 0
      if (grid[i][j] === "B") {
        sum++
      } else {
        sum--
      }
      if (grid[i][j + 1] === "B") {
        sum++
      } else if (grid[i]?.[j + 1] === "W") {
        sum--
      }
      if (grid?.[i + 1]?.[j] === "B") {
        sum++
      } else if (grid?.[i + 1]?.[j] === "W") {
        sum--
      }
      if (grid?.[i + 1]?.[j + 1] === "B") {
        sum++
      } else if (grid?.[i + 1]?.[j + 1] === "W") {
        sum--
      }

      const abs = Math.abs(sum)
      if (abs === 2 || abs === 4) return true
    }
  }

  return false
}

console.log(canMakeSquare(grid))
