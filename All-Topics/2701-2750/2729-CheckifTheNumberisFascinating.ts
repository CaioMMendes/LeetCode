const n = 192

/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n: number) {
  return /^(?=.*1)(?=.*2)(?=.*3)(?=.*4)(?=.*5)(?=.*6)(?=.*7)(?=.*8)(?=.*9)[1-9]{9}$/.test(
    String(n) + String(n * 2) + String(n * 3)
  )
}

console.log(isFascinating(n))
