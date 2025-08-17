const mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  k = 4

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function (mat: number[][], k: number) {
  const rows = mat.length
  const columns = mat[0].length
  const result = []
  const newK = k % columns

  for (let i = 0; i < rows; i++) {
    const newRow = []
    for (let j = 0; j < columns; j++) {
      let index
      if (i % 2 === 0) {
        index = (j + newK) % columns
      } else {
        index = (j + columns - newK) % columns
      }
      newRow.push(mat[i][index])
    }
    result.push(newRow)
  }
  // Verificar se a matriz resultante é igual à original
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (result[i][j] !== mat[i][j]) {
        return false
      }
    }
  }
  return true
}

console.log(areSimilar(mat, k))
