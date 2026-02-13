const dictionary = ["cat", "bat", "rat"],
  sentence = "the cattle was rattled by the battery"

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary: string[], sentence: string) {
  const sorted = dictionary.sort((a, b) => a.localeCompare(b))

  const splitedSentence = sentence.split(" ")

  return splitedSentence
    .map((val) => {
      for (let i = 0; i < sorted.length; i++) {
        if (val.startsWith(sorted[i])) return sorted[i]
      }

      return val
    })
    .join(" ")
}

console.log(replaceWords(dictionary, sentence))
