const num = 2,
  sum = 3

/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function (num: number, sum: number) {
  let result = ""
  let current = sum

  for (let i = 0; i < num; i++) {
    if (current >= 9) {
      result += "9"
      current -= 9
    } else if (current > 0) {
      result += `${current}`
      current = 0
    } else {
      result += "0"
    }
  }

  if (current > 0) {
    return ""
  }

  return result
}

console.log(maxSumOfSquares(num, sum))
