const a = 12,
  b = 6

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a: number, b: number) {
  const min = Math.min(a, b)
  let result = 0

  for (let i = 1; i <= min; i++) {
    if (Number.isInteger(a / i) && Number.isInteger(b / i)) {
      result++
    }
  }

  return result
}

console.log(commonFactors(a, b))
