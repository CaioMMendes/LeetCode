const ranges = [[1, 1]],
  left = 1,
  right = 50

/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges: number[][], left: number, right: number) {
  const rangesLength = ranges.length

  for (let j = left; j <= right; j++) {
    let error = true
    for (let i = 0; i < rangesLength; i++) {
      const [elementL, elementR] = ranges[i]

      if (j >= elementL && j <= elementR) {
        error = false
        break
      }
    }

    if (error) return false
  }
  return true
}

console.log(isCovered(ranges, left, right))
