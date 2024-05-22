const words = ["Hello", "Alaska", "Dad", "Peace"]

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words: string[]) {
  const firstRow = "qwertyuiop"
  const secondRow = "asdfghjkl"
  const thirdRow = "zxcvbnm"

  const wordsLength = words.length
  const result: string[] = []

  for (let i = 0; i < wordsLength; i++) {
    const word = words[i].toLowerCase()
    const wordLength = word.length
    let characters

    for (let j = 0; j < wordLength; j++) {
      if (j === 0) {
        if (firstRow.includes(word[j])) characters = firstRow
        if (secondRow.includes(word[j])) characters = secondRow
        if (thirdRow.includes(word[j])) characters = thirdRow
      }

      if (!characters.includes(word[j])) break

      if (j === wordLength - 1) {
        result.push(words[i])
      }
    }
  }

  return result
}

console.log(findWords(words))
