const word = "aaAbcBC"

/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word: String) {
  const length = word.length
  const lower: Record<string, boolean> = {}
  const upper: Record<string, boolean> = {}
  let result = 0

  for (let i = 0; i < length; i++) {
    const lowerCase = word[i].toLowerCase()
    if (lowerCase === word[i]) {
      lower[word[i]] = true
    } else {
      upper[word[i]] = true
    }
  }

  for (let key in lower) {
    if (upper[key.toUpperCase()]) {
      result++
    }
  }

  return result
}

console.log(numberOfSpecialChars(word))
