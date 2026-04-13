const matrix = [
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 0],
]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function (matrix: number[][]) {
  return matrix.map((arr) => {
    return arr.reduce((acc, cur) => acc + cur, 0)
  })
}

console.log(findDegrees(matrix))
