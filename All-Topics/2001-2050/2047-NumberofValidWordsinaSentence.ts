const sentence = "cat and  dog"

/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence: string) {
  const splited = sentence.trim().split(/\s+/)
  let result = 0
  for (const value of splited) {
    const matchedDigit = value.match(/\d/g)
    if (matchedDigit) {
      continue
    }
    if (value.match(/-/g)?.length ?? 0 > 1) {
      continue
    }
    if (value.match(/-/g)) {
      const index = value.indexOf("-")
      if (
        !value?.[index - 1]?.match(/[a-z]/) ||
        !value?.[index + 1]?.match(/[a-z]/)
      ) {
        continue
      }
    }
    const matchedTokens = value.match(/[!,.]/g)
    if (matchedTokens && matchedTokens?.length > 1) {
      continue
    }
    if (matchedTokens) {
      const index = value.indexOf(matchedTokens[0])
      if (index !== value.length - 1) continue
    }
    result++
  }

  return result
}

console.log(countValidWords(sentence))
