const s = "egcfe"

/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s: string) {
  const splited = s.split("")

  const half = Math.floor(s.length / 2)

  for (let i = 0; i < half; i++) {
    const sorted = [splited[i], splited[splited.length - 1 - i]].sort((a, b) =>
      a.localeCompare(b),
    )
    splited[i] = sorted[0]
    splited[splited.length - 1 - i] = sorted[0]
  }

  return splited.join("")
}

console.log(makeSmallestPalindrome(s))
