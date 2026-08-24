const s = "b"

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromic = function (s: string) {
  let string = ""

  for (const val of s) {
    string += String(val.charCodeAt(0).toString(2)).padStart(8, "0")
  }

  const half = Math.floor(string.length)

  for (let i = 0; i < half; i++) {
    if (string[i] === string[string.length - i - 1]) continue
    return false
  }

  return true
}

console.log(isPalindromic(s))
