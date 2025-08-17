const n = 250

/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n: number) {
  let a = 1
  let b = 1
  let result = 0
  while (a <= n) {
    b = 1
    while (b <= n) {
      const c = (a ** 2 + b ** 2) ** 0.5
      if (Number.isInteger(c) && c <= n) {
        result++
      }

      b++
    }

    a++
  }
  return result
}

console.log(countTriples(n))
