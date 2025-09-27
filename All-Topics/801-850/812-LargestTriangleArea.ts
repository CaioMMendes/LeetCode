const points = [
  [0, 0],
  [0, 1],
  [1, 0],
  [0, 2],
  [2, 0],
]

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points: number[][]) {
  let result = 0

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        const a = points[i]
        const b = points[j]
        const c = points[k]

        const distanceAB = ((b[0] - a[0]) ** 2 + (b[1] - a[1]) ** 2) ** 0.5
        const distanceBC = ((c[0] - b[0]) ** 2 + (c[1] - b[1]) ** 2) ** 0.5
        const distanceCA = ((a[0] - c[0]) ** 2 + (a[1] - c[1]) ** 2) ** 0.5

        const firstCompare =
          Math.abs(distanceAB) + Math.abs(distanceBC) > Math.abs(distanceCA)
        const secondCompare =
          Math.abs(distanceBC) + Math.abs(distanceCA) > Math.abs(distanceAB)
        const thirdCompare =
          Math.abs(distanceCA) + Math.abs(distanceAB) > Math.abs(distanceBC)

        if (firstCompare && secondCompare && thirdCompare) {
          const s = (distanceAB + distanceBC + distanceCA) / 2
          const area = Math.sqrt(
            s * (s - distanceAB) * (s - distanceBC) * (s - distanceCA)
          )

          if (area > result) result = area
        }
      }
    }
  }

  return result
}

console.log(largestTriangleArea(points))
