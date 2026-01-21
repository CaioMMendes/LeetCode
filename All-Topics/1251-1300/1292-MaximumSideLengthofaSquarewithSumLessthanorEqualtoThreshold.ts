const mat = [
    [1, 1, 3, 2, 4, 3, 2],
    [1, 1, 3, 2, 4, 3, 2],
    [1, 1, 3, 2, 4, 3, 2],
  ],
  threshold = 4

/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function (mat: number[][], threshold: number) {
  const matrixSum = generateMatrixSum(mat)

  let maxSize = Math.min(mat[0].length, mat.length)
  while (maxSize >= 1) {
    for (let i = maxSize; i <= mat.length; i++) {
      for (let j = maxSize; j <= mat[0].length; j++) {
        const check = checkSquare(maxSize, i - maxSize, j - maxSize, matrixSum)

        if (check) return maxSize
      }
    }

    maxSize--
  }

  return 0

  function checkSquare(
    size: number,
    x: number,
    y: number,
    matrixSum: number[][],
  ) {
    let sum = 0

    for (let i = 0; i < size; i++) {
      const row = x + i
      const right = y + size - 1

      const rowSum = matrixSum[row][right] - (y > 0 ? matrixSum[row][y - 1] : 0)

      sum += rowSum
      if (sum > threshold) return false
    }

    return true
  }

  function generateMatrixSum(mat: number[][]) {
    const matrix = []

    for (let i = 0; i < mat.length; i++) {
      let currentSum = 0
      const row = []
      for (let j = 0; j < mat[0].length; j++) {
        currentSum += mat[i][j]
        row.push(currentSum)
      }
      matrix.push(row)
    }
    return matrix
  }
}

console.log(maxSideLength(mat, threshold))
