const s = "10101"

/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s: string) {
  let currentDigit = s[0]
  let result = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== currentDigit) {
      let count = 1
      while (
        s?.[i - count] === currentDigit &&
        s?.[i + count - 1] !== currentDigit &&
        s?.[i + count - 1] !== undefined
      ) {
        result++
        count++
      }
      currentDigit = s[i]
    }
  }

  return result
}

console.log(countBinarySubstrings(s))
