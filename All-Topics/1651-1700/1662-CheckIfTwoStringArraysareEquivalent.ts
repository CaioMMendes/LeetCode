const word1 = ["ab", "c"],
  word2 = ["a", "bc"]

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1: string[], word2: string[]) {
  return word1.join("") === word2.join("")
}

console.log(arrayStringsAreEqual(word1, word2))
