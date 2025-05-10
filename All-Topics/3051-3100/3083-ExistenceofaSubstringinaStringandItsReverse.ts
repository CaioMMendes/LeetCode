const s = "leetcode"

/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s: string) {
  const reverse = s.split("").reverse().join("")

  for (let i = 1; i < s.length; i++) {
    const string = s[i - 1] + s[i]
    const index = reverse.indexOf(string)
    const indexDois = s.indexOf(string)
    if (index !== -1 && indexDois !== -1) {
      return true
    }
  }

  return false
}

console.log(isSubstringPresent(s))
