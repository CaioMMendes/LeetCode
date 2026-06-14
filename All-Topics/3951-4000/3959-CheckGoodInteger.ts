const n = 1000

/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function (n: number | string) {
  let digitSum = 0
  let squareSum = 0
  n = String(n)

  for (const val of n) {
    digitSum += Number(val)
    squareSum += Number(val) ** 2
  }

  return squareSum - digitSum >= 50
}

console.log(checkGoodInteger(n))
