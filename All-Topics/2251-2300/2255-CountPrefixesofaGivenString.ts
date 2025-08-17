const words = ["a", "b", "c", "ab", "bc", "abc"],
  s = "abc"

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words: string[], s: string) {
  return words.reduce((acc, cur) => {
    if (s.startsWith(cur)) {
      return acc + 1
    } else {
      return acc
    }
  }, 0)
}

console.log(countPrefixes(words, s))
