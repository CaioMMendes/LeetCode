const grid = [
  [1, 7, 3],
  [9, 8, 2],
  [4, 5, 6],
]

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function (grid: number[][]) {
  const rows = []
  const numberOfColumns = grid[0].length
  const numberOfRows = grid.length

  for (let i = numberOfRows - 1; i >= 0; i--) {
    let count = numberOfRows - i
    const row = []

    for (let j = 0; j < count; j++) {
      const element = grid?.[i + j]?.[j]

      if (element === undefined) break
      row.push(element)
    }
    rows.push(row)
  }

  for (let i = 0; i < numberOfRows - 1; i++) {
    let count = numberOfRows - i
    const row = []
    let counter = 0

    for (let j = numberOfColumns - 1 - i; j < numberOfColumns; j++) {
      const element = grid?.[counter]?.[j]

      if (element === undefined) break
      row.push(element)
      counter++
    }
    rows.push(row)
  }

  const matrix = rows.map((row, i) => {
    const mid = Math.ceil(rows.length / 2)
    if (i <= mid) {
      return row.sort((a, b) => b - a)
    } else {
      return row.sort((a, b) => a - b)
    }
  })

  let result = new Array(grid.length)
  for (let i = 0; i < grid.length; i++) {
    const newArray = new Array(grid.length)
    result[i] = newArray
  }
  let current = 0

  for (let i = numberOfRows - 1; i >= 0; i--) {
    let count = numberOfRows - i
    let k = 0

    for (let j = 0; j < count; j++) {
      const element = grid?.[i + j]?.[j]
      if (element === undefined) break
      result[i + j][j] = matrix?.[current]?.[k]
      k++
    }

    current++
  }

  for (let i = 0; i < numberOfRows - 1; i++) {
    let count = numberOfRows - i
    const row = []
    let counter = 0
    let k = 0

    for (let j = numberOfColumns - 1 - i; j < numberOfColumns; j++) {
      const element = grid?.[counter]?.[j]

      if (element === undefined) break
      result[counter][j] = matrix?.[current]?.[k]
      counter++
      k++
    }
    current++
  }

  return result
}

console.log(sortMatrix(grid))
