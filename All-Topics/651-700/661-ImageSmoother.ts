const img = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]

/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img: number[][]) {
  const rows = img.length
  const columns = img[0].length
  let result = []

  for (let i = 0; i < rows; i++) {
    const newRow = []

    for (let j = 0; j < columns; j++) {
      let sum = 0
      let count = 0

      if (img?.[i - 1]?.[j - 1] !== undefined) {
        sum += img?.[i - 1]?.[j - 1]
        count++
      }
      if (img?.[i - 1]?.[j] !== undefined) {
        sum += img?.[i - 1]?.[j]
        count++
      }
      if (img?.[i - 1]?.[j + 1] !== undefined) {
        sum += img?.[i - 1]?.[j + 1]
        count++
      }

      if (img?.[i]?.[j - 1] !== undefined) {
        sum += img?.[i]?.[j - 1]
        count++
      }
      if (img?.[i]?.[j] !== undefined) {
        sum += img?.[i]?.[j]
        count++
      }
      if (img?.[i]?.[j + 1] !== undefined) {
        sum += img?.[i]?.[j + 1]
        count++
      }

      if (img?.[i + 1]?.[j - 1] !== undefined) {
        sum += img?.[i + 1]?.[j - 1]
        count++
      }
      if (img?.[i + 1]?.[j] !== undefined) {
        sum += img?.[i + 1]?.[j]
        count++
      }
      if (img?.[i + 1]?.[j + 1] !== undefined) {
        sum += img?.[i + 1]?.[j + 1]
        count++
      }
      newRow.push(Math.floor(sum / count))
    }

    result.push(newRow)
  }

  return result
}

console.log(imageSmoother(img))
