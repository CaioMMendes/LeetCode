const matrix = [
  [1, 2, -1],
  [4, -1, 6],
  [7, 8, 9],
]

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function (matrix: number[][]) {
  const rows = matrix.length
  const columns = matrix[0].length

  for (let i = 0; i < columns; i++) {
    let max = 0
    for (let k = 0; k < rows; k++) {
      if (matrix[k][i] > max) {
        max = matrix[k][i]
      }
    }

    for (let j = 0; j < rows; j++) {
      if (matrix[j][i] === -1) {
        matrix[j][i] = max
      }
    }
  }

  return matrix
}

console.log(modifiedMatrix(matrix))
