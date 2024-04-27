const matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ],
  // const matrix = [[1, 1]],
  target = 26

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix: number[][], target: number) {
  const length = matrix.length

  for (let index = 0; index < length; index++) {
    const element = matrix[index]

    let low = 0
    let high = matrix[0].length - 1

    while (low <= high) {
      const mid = Math.floor((low + high) / 2)
      const guess = element[mid]
      if (guess === target) {
        return true
      } else if (guess > target) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    if (index === length - 1) return false
  }
}

console.log(searchMatrix(matrix, target))
