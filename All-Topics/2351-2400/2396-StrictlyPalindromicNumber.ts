const n = 9

/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n: number) {
  for (let i = 2; i <= n - 2; i++) {
    const result = checkPalindromic(n.toString(i))
    if (!result) return false
  }

  return true

  function checkPalindromic(str: string) {
    const min = Math.floor(str.length / 2)
    for (let i = 0; i < min; i++) {
      const start = str[i]
      const end = str[str.length - 1 - i]
      if (start !== end) return false
    }
    return true
  }
}

console.log(isStrictlyPalindromic(n))
