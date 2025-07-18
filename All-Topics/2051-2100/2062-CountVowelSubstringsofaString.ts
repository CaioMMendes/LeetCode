const word = "aeiouu"

/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function (word: string) {
  let result = 0
  const vowels = new Set(["a", "e", "i", "o", "u"])

  for (let i = 0; i < word.length; i++) {
    if (!vowels.has(word[i])) continue
    const set = new Set([word[i]])

    for (let j = i + 1; j < word.length; j++) {
      if (!vowels.has(word[j])) break
      set.add(word[j])
      if (set.size === 5) {
        result++
      }
    }
  }

  return result
}

console.log(countVowelSubstrings(word))
