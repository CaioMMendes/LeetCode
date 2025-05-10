const words = ["mass", "as", "hero", "superhero"]

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words: string[]) {
  return words.filter((word) => {
    const has = words.some((teste) => {
      if (teste === word) return false
      if (teste.includes(word)) return true
    })
    if (has) return true
    return false
  })
}

console.log(stringMatching(words))
