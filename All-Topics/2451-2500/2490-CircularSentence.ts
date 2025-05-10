const sentence = "leetcode exercises sound delightful"

/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence: string) {
  const splitedSentence = sentence.split(" ") as string[]

  for (let i = 0; i < splitedSentence.length; i++) {
    const element = splitedSentence[i]

    if (i === splitedSentence.length - 1) {
      if (element[element.length - 1] !== splitedSentence[0][0]) return false
      return true
    }
    if (element[element.length - 1] !== splitedSentence[i + 1][0]) {
      return false
    }
  }

  return true
}

console.log(isCircularSentence(sentence))
