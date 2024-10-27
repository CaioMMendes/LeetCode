const words = ["pay", "attention", "practice", "attend"],
  pref = "at"

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words: string[], pref: string) {
  return words.reduce((acc, cur) => {
    if (cur.startsWith(pref)) {
      return (acc += 1)
    }
    return acc
  }, 0)
}

console.log(prefixCount(words, pref))
