const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat: number[][]) {
  const matLength = mat.length
  const isOdd = matLength % 2 !== 0
  let sum = 0
  const numberToOnlyOne = isOdd ? Math.floor(matLength / 2) : -1

  for (let i = 0; i < matLength; i++) {
    if (numberToOnlyOne === i) {
      sum += mat[i][i]
    } else {
      sum += mat[i][i]
      sum += mat[i][matLength - 1 - i]
    }
  }
  return sum
}

console.log(diagonalSum(mat))
