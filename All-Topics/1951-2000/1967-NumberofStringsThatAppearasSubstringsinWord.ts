const patterns = ["a", "abc", "bc", "d"],
  word = "abc"

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns: string[], word: string) {
  return patterns.reduce((acc, cur) => {
    if (word.includes(cur)) {
      return (acc += 1)
    }
    return acc
  }, 0)
}

console.log(numOfStrings(patterns, word))
