const word = "aaAbcBC"

/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word: string) {
  const upper: Record<string, number> = {}
  const lower: Record<string, number> = {}
  let result = 0

  for (let i = 0; i < word.length; i++) {
    const val = word[i]
    const uppercase = val.toUpperCase()

    if (uppercase !== val) {
      lower[val] = i
    } else {
      if (upper[val] === undefined) upper[val] = i
    }
  }

  for (const key in upper) {
    const lowercase = key.toLowerCase()

    if (lower[lowercase] < upper[key]) result++
  }

  return result
}

console.log(numberOfSpecialChars(word))
