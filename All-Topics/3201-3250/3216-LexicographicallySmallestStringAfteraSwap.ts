const s = "45320"

/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function (s: string) {
  for (let i = 1; i < s.length; i++) {
    const number1 = Number(s[i])
    const number2 = Number(s[i - 1])

    const isParity =
      (number1 % 2 === 0 && number2 % 2 === 0) ||
      (number1 % 2 !== 0 && number2 % 2 !== 0)

    if (number1 < number2 && isParity) {
      s = s.slice(0, i - 1) + `${s[i]}${s[i - 1]}` + s.slice(i + 1, s.length)
      break
    }
  }

  return s
}

console.log(getSmallestString(s))
