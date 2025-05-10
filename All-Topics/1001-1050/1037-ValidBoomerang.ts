const points = [
  [1, 1],
  [2, 3],
  [3, 2],
]

/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points: number[][]) {
  const [[x1, y1], [x2, y2], [x3, y3]] = points

  // Verifica se os três pontos não são colineares
  return (x2 - x1) * (y3 - y1) !== (x3 - x1) * (y2 - y1)
}

console.log(isBoomerang(points))
