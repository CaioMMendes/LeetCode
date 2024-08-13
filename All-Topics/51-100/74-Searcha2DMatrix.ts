const matrix = [[1], [3]],
  target = 3

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix: number[][], target: number) {
  const matrixLength = matrix.length
  const vetorLength = matrix[0].length

  let low = 0
  let high = matrixLength * vetorLength - 1
  console.log(low, high)

  while (low <= high) {
    const math = Math.floor((low + high) / 2)
    const column = math % vetorLength
    const line = Math.floor(math / vetorLength)
    const guess = matrix[line][column]
    if (guess === target) {
      return true
    } else if (guess > target) {
      high = math - 1
    } else {
      low = math + 1
    }
  }
  return false
}

console.log(searchMatrix(matrix, target))
