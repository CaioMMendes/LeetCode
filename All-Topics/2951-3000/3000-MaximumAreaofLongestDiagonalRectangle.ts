const dimensions = [
  [9, 3],
  [8, 6],
]

/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions: number[][]) {
  let maxArea: number[] = []

  dimensions.map((val) => {
    const diagonal = (val[0] ** 2 + val[1] ** 2) ** 0.5

    const area = val[0] * val[1]
    if (diagonal > (maxArea?.[1] ?? 0)) {
      maxArea = [area, diagonal]
    } else if (diagonal === maxArea?.[1] && (maxArea?.[0] ?? 0) < area) {
      maxArea = [area, diagonal]
    }
  })

  return maxArea[0]
}

console.log(areaOfMaxDiagonal(dimensions))
