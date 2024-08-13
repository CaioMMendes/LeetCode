const matrix = [
  [1, 1, 1],
  [1, 2, 3],
  [1, 2, 3],
]

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix: number[][]) {
  const rows = matrix.length

  for (let i = 0; i < rows; i++) {
    const countRows = {}
    for (let j = 0; j < rows; j++) {
      if (matrix[i][j] < 1 || matrix[i][j] > rows) {
        return false
      } else if (countRows[matrix[i][j]]) {
        return false
      } else {
        countRows[matrix[i][j]] = 1
      }
    }

    const countColumns = {}

    for (let j = 0; j < rows; j++) {
      if (matrix[j][i] < 1 || matrix[j][i] > rows) {
        return false
      } else if (countColumns[matrix[j][i]]) {
        return false
      } else {
        countColumns[matrix[j][i]] = 1
      }
    }
  }

  return true
}

console.log(checkValid(matrix))
