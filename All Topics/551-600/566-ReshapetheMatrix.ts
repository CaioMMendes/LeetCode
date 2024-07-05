const mat = [
    [1, 2],
    [3, 4],
  ],
  r = 2,
  c = 4

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat: number[][], r: number, c: number) {
  const numberOfItems = mat.reduce((acc, cur) => acc + cur.length, 0)
  const numberOfItemsResult = r * c
  if (numberOfItems !== numberOfItemsResult) {
    return mat
  }

  let column = 0
  let row = 0
  const rows = mat.length
  const columns = mat[0].length
  const result: number[][] = []

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const element = mat[i][j]
      if (column === 0 && row <= r) {
        result.push([])
      }
      if (column < c && row <= r) {
        column++
        result[row].push(element)
      }
      if (column === c) {
        column = 0
        row++
      }
    }
  }

  return result
}

console.log(matrixReshape(mat, r, c))
