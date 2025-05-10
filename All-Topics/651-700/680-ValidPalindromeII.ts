const s = "abvccba"

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s: string) {
  const half = Math.floor(s.length / 2)
  for (let i = 0; i < half; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      const half2 = Math.floor((s.length - 1) / 2)
      let error = 0
      for (let j = i; j < half2; j++) {
        if (s[j + 1] !== s[s.length - 1 - j]) {
          error++
          break
        }
      }

      for (let j = i; j < half2; j++) {
        if (s[j] !== s[s.length - 2 - j]) {
          error++
          break
        }
      }
      return error < 2
    }
  }

  return true
}

console.log(validPalindrome(s))
