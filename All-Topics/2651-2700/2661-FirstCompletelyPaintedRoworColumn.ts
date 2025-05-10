const arr = [6, 2, 3, 1, 4, 5],
  mat = [
    [5, 1],
    [2, 4],
    [6, 3],
  ]

/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr: number[], mat: number[][]) {
  const rows = mat.length
  const columns = mat[0].length

  const map = new Map()
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      map.set(mat[i][j], [i, j])
    }
  }

  const countRows: Record<string, number> = {}
  const countColumns: Record<string, number> = {}

  for (let i = 0; i < rows * columns; i++) {
    const [row, column] = map.get(arr[i])

    if (countRows[row]) {
      countRows[row]++
    } else {
      countRows[row] = 1
    }
    if (countColumns[column]) {
      countColumns[column]++
    } else {
      countColumns[column] = 1
    }

    if (countColumns[column] >= rows || countRows[row] >= columns) {
      return i
    }
  }
}

console.log(firstCompleteIndex(arr, mat))
