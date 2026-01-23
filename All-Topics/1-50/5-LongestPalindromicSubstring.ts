const s = "babad"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s: string) {
  let result = s[0]

  for (let i = 0; i < s.length; i++) {
    let str = s[i]

    for (let j = i + 1; j < s.length; j++) {
      str += s[j]
      if (str.length < result.length) continue
      const check = checkPalindrome(str)
      if (check && str.length > result.length) result = str
    }
  }

  return result

  function checkPalindrome(str: string) {
    const half = Math.floor(str.length / 2)

    for (let i = 0; i < half; i++) {
      if (str[i] !== str[str.length - i - 1]) return false
    }

    return true
  }
}

console.log(longestPalindrome(s))
