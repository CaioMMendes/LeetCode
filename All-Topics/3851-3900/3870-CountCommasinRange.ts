const n = 1002

/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function (n: number) {
  if (n < 1000) return 0

  return n - 999
}

console.log(countCommas(n))
