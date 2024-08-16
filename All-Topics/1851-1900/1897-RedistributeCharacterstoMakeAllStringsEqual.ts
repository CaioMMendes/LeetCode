const words = ["abc", "aabc", "bc"]

/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words: string[]) {
  const count: Record<string, number> = {}

  for (let value of words) {
    const valueLength = value.length
    for (let i = 0; i < valueLength; i++) {
      if (count[value[i]]) {
        count[value[i]]++
      } else {
        count[value[i]] = 1
      }
    }
  }
  const wordsLength = words.length
  for (let key in count) {
    const value = count[key]
    if (value % wordsLength !== 0) {
      return false
    }
  }
  return true
}

console.log(makeEqual(words))
