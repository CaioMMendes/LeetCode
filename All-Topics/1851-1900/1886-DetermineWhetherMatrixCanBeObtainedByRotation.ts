const mat = [
    [0, 1],
    [1, 0],
  ],
  target = [
    [1, 0],
    [0, 1],
  ]

/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat: number[][], target: number[][]) {
  const length = mat.length

  for (let i = 0; i < 4; i++) {
    if (check(mat)) return true
    mat = rotate(mat)
  }

  return false

  function check(newMatrix: number[][]) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (newMatrix[i][j] !== target[i][j]) return false
      }
    }
    return true
  }

  function rotate(matrix: number[][]) {
    const newMatrix = Array.from({ length }, () => Array(length).fill(0))

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        newMatrix[j][i] = matrix[length - 1 - i][j]
      }
    }
    return newMatrix
  }
}

console.log(findRotation(mat, target))
