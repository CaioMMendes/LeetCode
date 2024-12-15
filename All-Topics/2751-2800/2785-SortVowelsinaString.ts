const s = "lEetcOde"

/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s: string) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  const splited: string[] = s
    .split("")
    .filter((str: string) => vowels.includes(str))
  const upper = splited
    .filter((str) => isUpperCase(str))
    .sort((a, b) => a.localeCompare(b))
  const lower = splited
    .filter((str) => !isUpperCase(str))
    .sort((a, b) => a.localeCompare(b))

  let result = ""
  let upperIndex = 0
  let lowerIndex = 0
  const length = s.length
  for (let i = 0; i < length; i++) {
    if (!vowels.includes(s[i])) {
      result += s[i]
      continue
    }
    if (upperIndex < upper.length) {
      result += upper[upperIndex]
      upperIndex++
    } else {
      result += lower[lowerIndex]
      lowerIndex++
    }
  }
  return result

  function isUpperCase(string: string) {
    return /^[A-Z]*$/.test(string)
  }
}

console.log(sortVowels)
