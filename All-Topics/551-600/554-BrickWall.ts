const wall = [
  [1, 2, 2, 1],
  [3, 1, 2],
  [1, 3, 2],
  [2, 4],
  [3, 1, 2],
  [1, 3, 1, 1],
]

/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall: number[][]) {
  const count: Record<string, number> = {}
  const rows = wall.length

  for (const val of wall) {
    let current = 0
    for (let i = 0; i < val.length - 1; i++) {
      current += val[i]
      if (count[current]) {
        count[current]++
      } else {
        count[current] = 1
      }
    }
  }

  const values = Object.values(count)

  const max = values.length === 0 ? 0 : Math.max(...values)

  return rows - max
}

console.log(leastBricks(wall))
