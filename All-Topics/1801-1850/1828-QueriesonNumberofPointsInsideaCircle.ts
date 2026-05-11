const points = [
    [1, 3],
    [3, 3],
    [5, 3],
    [2, 2],
  ],
  queries = [
    [2, 3, 1],
    [4, 3, 1],
    [1, 1, 2],
  ]

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points: number[][], queries: number[][]) {
  const result = []

  for (const val of queries) {
    const [x, y, radius] = val

    let count = 0
    for (const val of points) {
      const dx = val[0] - x
      const dy = val[1] - y

      if (dx * dx + dy * dy <= radius * radius) {
        count++
      }
    }

    result.push(count)
  }

  return result
}

console.log(countPoints(points, queries))
