const mat = [
  [1, 0, 0],
  [0, 0, 1],
  [1, 0, 0],
]

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat: number[][]) {
  let result = 0
  const rows: Record<string, number> = {}
  const columns: Record<string, number> = {}

  const numberOfRows = mat.length
  const numberOfColumns = mat[0].length

  for (let i = 0; i < numberOfRows; i++) {
    for (let j = 0; j < numberOfColumns; j++) {
      if (mat[i][j] === 1) {
        if (rows[i]) {
          rows[i] += 1
        } else {
          rows[i] = 1
        }

        if (columns[j]) {
          columns[j] += 1
        } else {
          columns[j] = 1
        }
      }
    }
  }

  for (let i = 0; i < numberOfRows; i++) {
    for (let j = 0; j < numberOfColumns; j++) {
      if (mat[i][j] === 1) {
        if (rows[i] === 1 && columns[j] === 1) result++
      }
    }
  }
  return result
}

console.log(numSpecial(mat))
