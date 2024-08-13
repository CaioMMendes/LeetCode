const n = 16

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n: number) {
  return Number.isInteger(Math.log(n) / Math.log(4))
}

console.log(isPowerOfFour(n))
