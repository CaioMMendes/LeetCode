const grid = [
  [1, 3],
  [2, 2],
]

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid: number[][]) {
  const result: number[] = []
  const elements: Record<string, boolean> = {}
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const element = grid[i][j]
      if (!elements[element]) {
        elements[element] = true
      } else {
        result[0] = element
      }
    }
  }
  let count = 1
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!elements[count]) {
        result[1] = count
        return result
      }
      count++
    }
  }

  return result
}

console.log(findMissingAndRepeatedValues(grid))
