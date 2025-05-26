const n = 6,
  m = 5,
  k = 5

/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minCuttingCost = function (n: number, m: number, k: number) {
  let result = 0

  if (n > k) {
    result += (n - k) * k
  }

  if (m > k) {
    result += (m - k) * k
  }

  return result
}

console.log(minCuttingCost(n, m, k))
