const n = 536870912
// const n = 33554431

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n: number) {
  return Number.isInteger(Number((Math.log(n) / Math.log(2)).toFixed(13)))
}

console.log(isPowerOfTwo(n))
