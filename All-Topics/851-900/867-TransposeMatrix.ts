const matrix = [
  [1, 2, 3],
  [4, 5, 6],
]

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix: number[][]) {
  const rows = matrix.length
  const columns = matrix[0].length
  const result: number[][] = []

  for (let i = 0; i < columns; i++) {
    const array: number[] = []
    for (let j = 0; j < rows; j++) {
      array.push(matrix[j][i])
    }

    result.push(array)
  }

  return result
}

console.log(transpose(matrix))
