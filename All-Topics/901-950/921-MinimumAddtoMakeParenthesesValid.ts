const s = "())"

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s: string) {
  let countLeft = 0
  let result = 0

  for (const val of s) {
    if (val === "(") {
      countLeft++
    } else {
      countLeft--
    }

    if (countLeft < 0) {
      countLeft = 0
      result++
    }
  }

  return Math.abs(countLeft) + result
}

console.log(minAddToMakeValid(s))
