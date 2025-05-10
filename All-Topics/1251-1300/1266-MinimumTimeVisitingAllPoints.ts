const points = [
  [1, 1],
  [3, 4],
  [-1, 0],
]

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points: number[][]) {
  let result = 0
  for (let i = 1; i < points.length; i++) {
    const vertical = Math.abs(points[i][1] - points[i - 1][1])
    const horizontal = Math.abs(points[i][0] - points[i - 1][0])

    const max = vertical >= horizontal ? vertical : horizontal
    result += max
  }
  return result
}

console.log(minTimeToVisitAllPoints(points))
