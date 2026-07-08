const n = 2,
  k = 3

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumOfGoodIntegers = function (n: number, k: number) {
  let result = 0

  let right = k + n

  for (let i = 0; i <= right; i++) {
    const abs = Math.abs(n - i)
    if (abs <= k && (n & i) === 0) result += i
  }

  return result
}

console.log(sumOfGoodIntegers(n, k))
