const words = ["abc", "deq", "mee", "aqq", "dkd", "ccc"],
  pattern = "abb"

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words: string[], pattern: string) {
  let count = 0
  const setPattern = new Map()
  for (const char of pattern) {
    if (!setPattern.has(char)) {
      setPattern.set(char, count++)
    }
  }
  // Usar ',' para separar números
  const normalizedPattern = pattern
    .split("")
    .map((char) => setPattern.get(char))
    .join(",")

  return words.filter((word) => {
    if (word.length !== pattern.length) return false
    const wordMap = new Map()
    let currentNormalized = []
    let count = 0
    for (const char of word) {
      if (!wordMap.has(char)) {
        wordMap.set(char, count++)
      }
      currentNormalized.push(wordMap.get(char))
    }
    // Comparar com o mesmo delimitador
    return currentNormalized.join(",") === normalizedPattern
  })
}

console.log(findAndReplacePattern(words, pattern))
