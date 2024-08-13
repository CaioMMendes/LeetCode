// const s = "abccccdd"
const s = "a"

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s: string) {
  const sLength = s.length
  const count = {}
  let result = 0

  for (let index = 0; index < sLength; index++) {
    if (count[s[index]]) {
      count[s[index]]++
    } else {
      count[s[index]] = 1
    }
  }
  for (let i in count) {
    const element = count[i]

    result += Math.floor(element / 2) * 2
  }

  if (result < sLength) {
    return result + 1
  }

  return result
}

console.log(longestPalindrome(s))
