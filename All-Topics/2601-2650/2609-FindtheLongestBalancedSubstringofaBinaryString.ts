const s = "01000111"

/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function (s: string) {
  let result = 0
  let currentDigit = s[0]

  for (let i = 0; i < s.length; i++) {
    if (currentDigit !== s[i]) {
      let count = 1
      while (
        s?.[i - count] === currentDigit &&
        s?.[i + count - 1] !== currentDigit &&
        s?.[i + count - 1] !== undefined
      ) {
        count++
      }
      if (currentDigit === "0") {
        if (result < (count - 1) * 2) result = (count - 1) * 2
      }
      currentDigit = s[i]
    }
  }

  return result
}

console.log(findTheLongestBalancedSubstring(s))
