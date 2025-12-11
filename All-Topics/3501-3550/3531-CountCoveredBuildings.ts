const n = 3,
  buildings = [
    [1, 2],
    [2, 2],
    [3, 2],
    [2, 1],
    [2, 3],
  ]

/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
var countCoveredBuildings = function (n: number, buildings: number[][]) {
  const y = new Map()
  const x = new Map()

  for (const build of buildings) {
    const [buildX, buildY] = build
    const xLimit = x.get(buildY)
    const yLimit = y.get(buildX)

    if (!xLimit) {
      x.set(buildY, [buildX])
    } else {
      if (xLimit.length < 2) {
        x.set(buildY, [
          Math.min(buildX, xLimit[0]),
          Math.max(buildX, xLimit[0]),
        ])
      } else {
        x.set(buildY, [
          Math.min(buildX, xLimit[0]),
          Math.max(buildX, xLimit[1]),
        ])
      }
    }

    if (!yLimit) {
      y.set(buildX, [buildY])
    } else {
      if (yLimit.length < 2) {
        y.set(buildX, [
          Math.min(buildY, yLimit[0]),
          Math.max(buildY, yLimit[0]),
        ])
      } else {
        y.set(buildX, [
          Math.min(buildY, yLimit[0]),
          Math.max(buildY, yLimit[1]),
        ])
      }
    }
  }

  let result = 0

  for (const build of buildings) {
    const [buildX, buildY] = build
    const xLimit = x.get(buildY)
    const yLimit = y.get(buildX)
    if (xLimit.length < 2 || yLimit.length < 2) continue

    if (
      buildX > xLimit[0] &&
      buildX < xLimit[1] &&
      buildY > yLimit[0] &&
      buildY < yLimit[1]
    )
      result++
  }

  return result
}

console.log(countCoveredBuildings(n, buildings))
