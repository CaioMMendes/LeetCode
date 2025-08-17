const word = "abbcccc"

/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word: string) {
  let result = 1
  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i - 1]) {
      result++
    }
  }
  return result
}

console.log(possibleStringCount(word))
