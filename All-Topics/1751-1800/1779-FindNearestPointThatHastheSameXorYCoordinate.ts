const x = 3,
  y = 4,
  points = [
    [1, 2],
    [3, 1],
    [2, 4],
    [2, 3],
    [4, 4],
  ]

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x: number, y: number, points: number[][]) {
  let minDistance = +Infinity
  let result = -1
  for (let i = 0; i < points.length; i++) {
    const val = points[i]
    if (val[0] === x || val[1] === y) {
      const distance = Math.abs(val[0] - x) + Math.abs(val[1] - y)
      if (minDistance > distance) {
        minDistance = distance
        result = i
      }
    }
  }

  return result
}

console.log(nearestValidPoint(x, y, points))
