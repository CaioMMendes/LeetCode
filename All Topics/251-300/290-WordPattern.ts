const pattern = "abba",
  s = "dog dog dog dog"

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern: string, s: string) {
  const patternLength = pattern.length
  const alreadyIncluded: string[] = []
  const splitedS = s.split(" ")
  const sLength = splitedS.length
  const object = {}
  if (patternLength !== sLength) return false

  for (let i = 0; i < patternLength; i++) {
    const element = object[pattern[i]]
    if (element) {
      if (element === splitedS[i]) continue
      return false
    } else {
      if (alreadyIncluded.some((string) => string === splitedS[i])) return false
      object[pattern[i]] = splitedS[i]
      alreadyIncluded.push(splitedS[i])
    }
  }

  return true
}

console.log(wordPattern(pattern, s))
