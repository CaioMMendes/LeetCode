const s = "abcd",
  t = "abcde"

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s: string, t: string) {
  const tLength = t.length
  const countS = {}
  const countT = {}

  for (let i = 0; i < tLength; i++) {
    const sElement = s[i]
    const tElement = t[i]
    if (countS[sElement]) {
      countS[sElement]++
    } else {
      countS[sElement] = 1
    }
    if (countT[tElement]) {
      countT[tElement]++
    } else {
      countT[tElement] = 1
    }
  }

  for (let key in countT) {
    if (countT[key] !== countS[key]) return key
  }
}

console.log(findTheDifference(s, t))
