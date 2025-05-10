const rectangles = [
  [5, 8],
  [3, 9],
  [5, 12],
  [16, 5],
]

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles: number[][]) {
  const count: Record<string, number> = {}

  for (const val of rectangles) {
    const [one, two] = val
    const min = Math.min(one, two)
    if (count[min]) {
      count[min]++
    } else {
      count[min] = 1
    }
  }

  const values = Object.values(count)
  return values[values.length - 1]
}

console.log(countGoodRectangles(rectangles))
