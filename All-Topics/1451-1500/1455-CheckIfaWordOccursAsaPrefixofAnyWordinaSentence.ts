const sentence = "i love eating burger",
  searchWord = "burg"

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence: string, searchWord: string) {
  let index = -1
  sentence.split(" ").find((str, i) => {
    if (str.startsWith(searchWord)) {
      index = i + 1
      return true
    }
  })
  return index
}

console.log(isPrefixOfWord(sentence, searchWord))
