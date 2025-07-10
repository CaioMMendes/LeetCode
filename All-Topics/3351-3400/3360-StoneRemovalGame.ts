const n = 12

/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function (n: number) {
  for (let i = 10; i >= 0; i--) {
    n -= i

    if (n < 0 && i % 2 === 0) return false
    if (n < 0) return true
  }
}

console.log(canAliceWin(n))
