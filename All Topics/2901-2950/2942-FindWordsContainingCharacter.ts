const words = ["leet", "code"],
  x = "e"

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words: string[], x: string) {
  const result: number[] = []

  words.forEach((string, index) => {
    const charIndex = string.indexOf(x)
    if (charIndex !== -1) {
      result.push(index)
    }
  })

  return result
}

console.log(findWordsContaining(words, x))
