const obstacleGrid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid: number[][]) {
  const memo: Record<string, number> = {}
  const n = obstacleGrid[0].length
  const m = obstacleGrid.length

  function run(x: number, y: number) {
    if (x > n || y > m) return 0
    if (obstacleGrid[y - 1][x - 1] === 1) {
      return 0
    }
    if (x === n && y === m) return 1

    const key = `${x},${y}`
    if (memo[key] !== undefined) return memo[key]

    memo[key] = run(x + 1, y) + run(x, y + 1)
    return memo[key]
  }

  const result = run(1, 1)
  return result
}

console.log(uniquePathsWithObstacles(obstacleGrid))
