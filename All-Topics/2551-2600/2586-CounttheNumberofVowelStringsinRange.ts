const words = ["are", "amy", "u"],
  left = 0,
  right = 2

/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words: string[], left: number, right: number) {
  let result = 0
  const vowels = ["a", "e", "i", "o", "u"]

  for (let i = left; i <= right; i++) {
    if (
      vowels.includes(words[i][0]) &&
      vowels.includes(words[i][words[i].length - 1])
    )
      result++
  }
  return result
}

console.log(vowelStrings(words, left, right))
