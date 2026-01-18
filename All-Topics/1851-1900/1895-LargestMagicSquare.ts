const grid = [
  [7, 1, 4, 5, 6],
  [2, 5, 1, 6, 4],
  [1, 5, 4, 3, 2],
  [1, 2, 7, 3, 4],
]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestMagicSquare = function (grid: number[][]) {
  let maxSize = Math.min(grid[0].length, grid.length)
  while (maxSize > 1) {
    for (let i = maxSize; i <= grid.length; i++) {
      for (let j = maxSize; j <= grid[0].length; j++) {
        const check = checkSquare(maxSize, i - maxSize, j - maxSize)

        if (check) return maxSize
      }
    }

    maxSize--
  }

  return 1

  function checkSquare(size: number, x: number, y: number) {
    let firstDiagonal = 0

    for (let i = 0; i < size; i++) {
      firstDiagonal += grid[x + i][y + i]
    }

    let secondDiagonal = 0

    for (let i = size - 1; i >= 0; i--) {
      secondDiagonal += grid[x + i][y + (size - 1 - i)]
    }

    if (firstDiagonal !== secondDiagonal) return false

    for (let i = 0; i < size; i++) {
      let rowSum = 0

      for (let j = 0; j < size; j++) {
        rowSum += grid[x + i][y + j]
      }

      if (rowSum !== firstDiagonal) return false
    }

    for (let i = 0; i < size; i++) {
      let columnSum = 0

      for (let j = 0; j < size; j++) {
        columnSum += grid[x + j][y + i]
      }

      if (columnSum !== firstDiagonal) return false
    }

    return true
  }
}

console.log(largestMagicSquare(grid))
