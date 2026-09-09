const s = "PAYPALISHIRING",
  numRows = 3

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s: string, numRows: number) {
  const matrix: string[][] = []

  for (let i = 0; i < numRows; i++) {
    matrix.push([])
  }

  let row = 0
  let column = 0

  let current = 0
  let isColumn = true
  while (current < s.length) {
    if (isColumn) {
      makeColumn()
    } else {
      makeRow()
    }
    isColumn = !isColumn
  }
  let result = ""

  for (const val of matrix) {
    for (const char of val) {
      result += char
    }
  }

  return result

  function makeColumn() {
    for (let i = 0; i < numRows; i++) {
      if (current >= s.length) return
      matrix[i].push(s[current])
      current++
    }
  }

  function makeRow() {
    for (let i = numRows - 2; i > 0; i--) {
      if (current >= s.length) return
      matrix[i].push(s[current])
      current++
    }
  }
}

console.log(convert(s, numRows))
