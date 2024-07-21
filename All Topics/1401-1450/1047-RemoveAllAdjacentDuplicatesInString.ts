const s = "abbaca"

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s: string) {
  const sLength = s.length
  let result = ""
  for (let i = 0; i < sLength; i++) {
    const resultLength = result.length
    if (result[resultLength - 1] === s[i]) {
      result = result.slice(0, resultLength - 1)
    } else {
      result += s[i]
    }
  }
  return result
}

console.log(removeDuplicates(s))
