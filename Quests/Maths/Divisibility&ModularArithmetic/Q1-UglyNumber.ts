const n = 6

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n: number) {
  if (n <= 0) return false

  for (const val of [2, 3, 5]) {
    while (n % val === 0) {
      n = n / val
    }
  }

  return n === 1
}

console.log(isUgly(n))
