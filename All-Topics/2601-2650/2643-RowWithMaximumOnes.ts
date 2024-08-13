const mat = [
  [0, 0, 0],
  [0, 1, 1],
]

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat: number[][]) {
  let result = [0, 0]
  let count = 0
  const rows = mat.length
  const columns = mat[0].length

  for (let i = 0; i < rows; i++) {
    let oneCount = 0
    for (let j = 0; j < columns; j++) {
      if (mat[i][j] === 1) {
        oneCount++
      }
    }
    if (oneCount > count) {
      result = [i, oneCount]
      count = oneCount
    }
  }

  return result
}

console.log(rowAndMaximumOnes(mat))
