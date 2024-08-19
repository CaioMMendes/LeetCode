const s = "abab"

/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s: string) {
  let error = false

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "b") {
      error = true
      continue
    }
    if (s[i] === "a" && error === true) {
      return false
    }
  }
  return true
}

console.log(checkString(s))
