const s = "arRAzFif"

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s: string) {
  const alphabetArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]

  const lowerCase = {}
  const upperCase = {}
  const sLength = s.length
  let result = ""
  let resultIndex = -1

  for (let index = 0; index < sLength; index++) {
    if (alphabetArray.includes(s[index])) {
      if (!lowerCase[s[index]]) {
        lowerCase[s[index]] = 1
      }
    } else {
      if (!upperCase[s[index]]) {
        upperCase[s[index]] = 1
      }
    }
  }

  for (const key in lowerCase) {
    const upperCaseKey = key.toUpperCase()
    if (upperCase[upperCaseKey]) {
      const index = alphabetArray.indexOf(key)
      if (index > resultIndex) {
        result = upperCaseKey
        resultIndex = index
      }
    }
  }

  return result
}

console.log(greatestLetter(s))
