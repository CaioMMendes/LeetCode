const mat = [
  [3, 3, 1, 1],
  [2, 2, 1, 2],
  [1, 1, 1, 2],
]

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat: number[][]) {
  const lines = mat.length
  const columns = mat[0].length

  let initial = [lines - 1, 0]

  while (true) {
    let current = [...initial]
    let currentDiagonal = [...initial]
    const diagonal = []
    while (current[0] < lines && current[1] < columns) {
      diagonal.push(mat[current[0]][current[1]])
      current[0]++
      current[1]++
    }
    diagonal.sort((a, b) => a - b)
    for (let i = 0; i < diagonal.length; i++) {
      mat[currentDiagonal[0] + i][currentDiagonal[1] + i] = diagonal[i]
    }

    if (initial[0] === 0) {
      initial[1]++
      if (initial[1] >= columns) break
    } else {
      initial = [initial[0] - 1, initial[1]]
      if (initial[0] < 0) {
        initial = [0, 1]
      }
      if (initial[1] >= columns) break
    }
  }

  return mat
}

console.log(diagonalSort(mat))
