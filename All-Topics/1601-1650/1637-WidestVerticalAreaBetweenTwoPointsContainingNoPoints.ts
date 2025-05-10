const points = [
  [8, 7],
  [9, 9],
  [7, 4],
  [9, 7],
]

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points: number[][]) {
  const sorted = points.sort((a, b) => a[0] - b[0])

  let result = 0

  for (let i = 1; i < sorted.length; i++) {
    const calc = sorted[i][0] - sorted[i - 1][0]
    if (calc > result) {
      result = calc
    }
  }

  return result
}

console.log(maxWidthOfVerticalArea(points))
