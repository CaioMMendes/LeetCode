const m = 3,
  n = 7

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m: number, n: number) {
  const memo: Record<string, number> = {}

  function run(x: number, y: number) {
    if (x > n || y > m) return 0
    if (x === n && y === m) return 1

    const key = `${x},${y}`
    if (memo[key] !== undefined) return memo[key]

    memo[key] = run(x + 1, y) + run(x, y + 1)
    return memo[key]
  }

  return run(1, 1)
}

console.log(uniquePaths(m, n))
