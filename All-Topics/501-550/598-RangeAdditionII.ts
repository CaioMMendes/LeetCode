const m = 3,
  n = 3,
  ops = [
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
  ]

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m: number, n: number, ops: number[][]) {
  let minx = +Infinity
  let miny = +Infinity

  for (let i = 0; i < ops.length; i++) {
    if (minx > ops[i][0]) minx = ops[i][0]
    if (miny > ops[i][1]) miny = ops[i][1]
  }

  if (minx === Infinity) return m * n

  return minx * miny
}

console.log(maxCount(m, n, ops))
