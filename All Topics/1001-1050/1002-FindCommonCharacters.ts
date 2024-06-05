const words = ["bella", "label", "roller"]

/**
 * @param {string[]} words
 * @return {string[]}
 */

type CountType =
  | {
      string: number
    }
  | {}
var commonChars = function (words: string[]) {
  const wordsLength = words.length

  const countWords: CountType[] = []
  let min = +Infinity
  let minIndex = 0
  const result: string[] = []

  for (let i = 0; i < wordsLength; i++) {
    const word = words[i]
    const count = {}
    const wordLength = word.length
    if (wordLength < min) {
      min = wordLength
      minIndex = i
    }

    for (let j = 0; j < wordLength; j++) {
      if (count[word[j]]) {
        count[word[j]]++
      } else {
        count[word[j]] = 1
      }
    }
    countWords.push(count)
  }

  const wordFor = countWords[minIndex]

  for (let key in wordFor) {
    const value = wordFor[key]

    for (let i = 0; i < value; i++) {
      let error = false
      for (let j = 0; j < wordsLength; j++) {
        if (countWords[j][key] >= 1) {
          countWords[j][key]--
        } else {
          error = true
          break
        }
      }
      if (error === false) {
        result.push(key)
      }
    }
  }

  return result
}

console.log(commonChars(words))
