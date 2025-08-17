const banned = [1, 6, 5],
  n = 5,
  maxSum = 6

/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function (banned: number[], n: number, maxSum: number) {
  let sum = 0
  let count = 0
  const setBanned = new Set(banned)

  for (let i = 1; i <= n; i++) {
    if (setBanned.has(i)) continue
    if (sum + i <= maxSum) {
      sum += i
      count++
    }
  }

  return count
}

console.log(maxCount(banned, n, maxSum))
