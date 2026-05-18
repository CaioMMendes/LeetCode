const s = "132"

/**
 * @param {string} s
 * @return {boolean}
 */
var isAdjacentDiffAtMostTwo = function (s: string) {
  const splited = s.split("").map(Number)

  for (let i = 1; i < splited.length; i++) {
    if (Math.abs(splited[i] - splited[i - 1]) > 2) return false
  }
  return true
}

console.log(isAdjacentDiffAtMostTwo(s))
