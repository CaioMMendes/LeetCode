const m = 2,
  n = 3,
  indices = [
    [0, 1],
    [1, 1],
  ]

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m: number, n: number, indices: number[][]) {
  const matrix: number[][] = []
  let result = 0

  for (let index = 0; index < m; index++) {
    const array: number[] = []
    for (let j = 0; j < n; j++) {
      array.push(0)
    }
    matrix.push(array)
  }

  const indicesLength = indices.length

  for (let i = 0; i < indicesLength; i++) {
    for (let j = 0; j < 2; j++) {
      const increment = indices[i][j]

      if (j === 0) {
        for (let column = 0; column < n; column++) {
          matrix[increment][column]++
        }
      } else {
        for (let row = 0; row < m; row++) {
          matrix[row][increment]++
        }
      }
    }
  }

  matrix.forEach((array) =>
    array.forEach((value) => {
      if (value % 2 !== 0) {
        result++
      }
    })
  )

  return result
}

console.log(oddCells(m, n, indices))
