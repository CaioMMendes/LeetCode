const word1 = "abc",
  word2 = "pqr"

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1: string, word2: string) {
  let result = ""

  const word1Length = word1.length
  const word2Length = word2.length
  const length = word1Length + word2Length

  for (let i = 0; i < length; i++) {
    if (word1[i] && word2[i]) {
      result += word1[i]
    } else if (!word1[i]) {
      result += word2.slice(i, word2Length)
      break
    }
    if (word2[i] && word1[i]) {
      result += word2[i]
    } else if (!word2[i]) {
      result += word1.slice(i, word1Length)
      break
    }
  }
  return result
}

console.log(mergeAlternately(word1, word2))
