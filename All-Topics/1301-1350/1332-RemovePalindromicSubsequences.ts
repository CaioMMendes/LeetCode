const s = "aababaaabababa"

/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s: string) {
  return checkPalindrome(s) ? 1 : 2

  function checkPalindrome(str: string) {
    const half = Math.floor(str.length / 2)

    for (let i = 0; i < half; i++) {
      if (str[i] !== str[str.length - 1 - i]) return false
    }
    return true
  }
}

console.log(removePalindromeSub(s))
