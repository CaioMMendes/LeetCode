const words = ["abc", "car", "ada", "racecar", "cool"]

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words: string[]) {
  let result = ""

  for (let word of words) {
    const wordLength = word.length
    const half = Math.floor(wordLength / 2)
    if (half === 0) {
      return word
    }

    for (let index = 0; index < half; index++) {
      console.log(word[index], word[wordLength - 1])
      if (word[index] !== word[wordLength - 1 - index]) {
        index = wordLength
      }
      if (index === half - 1) {
        result = word
        return result
      }
    }
  }

  return result
}

console.log(firstPalindrome(words))
