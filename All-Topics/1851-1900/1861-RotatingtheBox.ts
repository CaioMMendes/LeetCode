const boxGrid = [
  ["#", "#", "*", ".", "*", "."],
  ["#", "#", "#", "*", ".", "."],
  ["#", "#", "#", ".", "#", "."],
]

/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function (boxGrid: string[][]) {
  const count = []
  const rows = boxGrid[0].length
  const columns = boxGrid.length

  const result: string[][] = []

  for (let i = 0; i < boxGrid.length; i++) {
    const row = boxGrid[i]

    let current = 0
    let currentArray = []

    for (let j = 0; j < boxGrid[0].length; j++) {
      const val = row[j]
      if (val === "#") {
        current++
      } else if (val === "*") {
        currentArray.push(current)
        current = 0
      }

      if (current === 0 && j === boxGrid[0].length - 1) {
        currentArray.push(current)
      }
    }

    if (current) {
      currentArray.push(current)
    }

    count.push(currentArray)
  }

  const segIndex = new Array(columns).fill(0)

  for (let i = 0; i < rows; i++) {
    result.push([])

    for (let j = columns - 1; j >= 0; j--) {
      const initialValue = boxGrid[j][i]
      const col = columns - 1 - j

      result[i][col] = "."

      if (initialValue === "*") {
        result[i][col] = initialValue
      }
      if (initialValue === "*" || i === rows - 1) {
        const limit = count[j][segIndex[j]]
        const offset = initialValue === "*" ? 0 : 1 // obstáculo: acima dele; fundo: inclui a linha i
        for (let k = limit; k > 0; k--) {
          result[i - k + offset][col] = "#"
        }
        segIndex[j]++
      }
    }
  }

  return result
}

console.log(rotateTheBox(boxGrid))
