const n = 27

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n: number) {
  if (n <= 0) return false
  const logResult = Math.log(n) / Math.log(3)

  return Math.abs(logResult - Math.round(logResult)) < 1e-10
}

console.log(isPowerOfThree(n))
