const sentences = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
]

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences: string[]) {
  let result = 0
  sentences.forEach((sentence) => {
    const length = sentence.split(" ").length
    result = length > result ? length : result
  })

  return result
}
