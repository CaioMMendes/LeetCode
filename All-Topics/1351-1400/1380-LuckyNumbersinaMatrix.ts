const matrix = [
  [3, 7, 8],
  [9, 11, 13],
  [15, 16, 17],
]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix: number[][]) {
  const rows = matrix.length
  const columns = matrix[0].length

  const minimuns: number[] = []
  const maximuns: number[] = []

  for (let i = 0; i < rows; i++) {
    let min = +Infinity

    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] < min) {
        min = matrix[i][j]
      }
    }
    minimuns.push(min)
  }

  for (let i = 0; i < columns; i++) {
    let max = 0

    for (let j = 0; j < rows; j++) {
      if (matrix[j][i] > max) {
        max = matrix[j][i]
      }
    }
    maximuns.push(max)
  }

  const result: number[] = []

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const element = matrix[i][j]
      if (element === minimuns[i] && element === maximuns[j]) {
        result.push(element)
      }
    }
  }

  return result
}

console.log(luckyNumbers(matrix))
