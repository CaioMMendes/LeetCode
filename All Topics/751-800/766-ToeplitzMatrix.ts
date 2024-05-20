const matrix = [
  [42, 73, 60, 99, 41, 94, 88, 17, 91, 54, 13, 56],
  [31, 42, 73, 60, 99, 41, 94, 88, 17, 91, 0, 13],
  [53, 31, 42, 73, 60, 99, 41, 94, 88, 17, 91, 54],
  [99, 53, 31, 42, 73, 60, 99, 41, 94, 88, 17, 91],
  [58, 99, 53, 31, 42, 73, 60, 99, 41, 94, 88, 17],
  [62, 58, 99, 53, 31, 42, 73, 60, 99, 41, 94, 88],
  [38, 62, 58, 99, 53, 31, 42, 73, 60, 99, 41, 94],
  [18, 38, 62, 58, 99, 53, 31, 42, 73, 60, 99, 41],
  [48, 18, 38, 62, 58, 99, 53, 31, 42, 73, 60, 99],
  [34, 48, 18, 38, 62, 58, 99, 53, 31, 42, 73, 60],
  [77, 34, 48, 18, 38, 62, 58, 99, 53, 31, 42, 73],
  [4, 77, 34, 48, 18, 38, 62, 58, 99, 53, 31, 42],
  [29, 4, 77, 34, 48, 18, 38, 62, 58, 99, 53, 31],
  [60, 29, 4, 77, 34, 48, 18, 38, 62, 58, 99, 53],
  [59, 60, 29, 4, 77, 34, 48, 18, 38, 62, 58, 99],
  [31, 59, 60, 29, 4, 77, 34, 48, 18, 38, 62, 58],
  [57, 31, 59, 60, 29, 4, 77, 34, 48, 18, 38, 62],
  [14, 57, 31, 59, 60, 29, 4, 77, 34, 48, 18, 38],
  [49, 14, 57, 31, 59, 60, 29, 4, 77, 34, 48, 18],
  [57, 49, 14, 57, 31, 59, 60, 29, 4, 77, 34, 48],
]

// const matrix = [
//   [1, 2],
//   [2, 2],
// ]

// const matrix = [
//   [23, 40, 65, 20, 51, 7, 18, 74, 18, 0, 35, 31],
//   [86, 23, 40, 65, 20, 51, 7, 18, 74, 18, 13, 35],
//   [53, 86, 23, 40, 65, 20, 51, 7, 18, 74, 18, 13],
//   [72, 53, 86, 23, 40, 65, 20, 51, 7, 18, 74, 18],
//   [73, 72, 53, 86, 23, 40, 65, 20, 51, 7, 18, 74],
//   [62, 73, 72, 53, 86, 23, 40, 65, 20, 51, 7, 18],
// ]

console.log("-------------------------------------------")
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix: number[][]) {
  const rows = matrix.length
  const columns = matrix[0].length - 1
  console.log("linhas", rows, "colunas", columns + 1)
  let count = 1
  let move = 0
  let move2 = 0
  for (let row = 0; row < rows; row++) {
    const nums = new Set()

    for (let i = 0; i < count; i++) {
      const num = matrix[rows - 1 - i][move - i]
      if (num !== undefined) {
        nums.add(num)
      }
    }
    move++
    count++
    console.log(nums)
    if (nums.size > 1) return false
  }

  count--
  let numbersToRepeat = Math.abs(columns + 1 - rows)

  move = 0
  for (let column = 0; column < columns; column++) {
    if (numbersToRepeat > 0) {
      numbersToRepeat--
    } else {
      count--
      move2++
    }

    const nums = new Set()
    let reduce = 0
    for (let i = count; 0 < i; i--) {
      const num = matrix[i - 1][i + move]

      if (num !== undefined) {
        nums.add(num)
      }

      reduce++
    }

    console.log(nums)
    if (nums.size > 1) return false

    move += 1
  }
  return true
}

console.log(isToeplitzMatrix(matrix))
