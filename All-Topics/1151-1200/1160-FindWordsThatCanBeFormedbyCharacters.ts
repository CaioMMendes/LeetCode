const words = ["cat", "bt", "hat", "tree"],
  chars = "atach"

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words: string[], chars: string) {
  const charsLength = chars.length
  const charsCount: Record<string, number> = {}
  let result = 0

  for (let i = 0; i < charsLength; i++) {
    if (charsCount[chars[i]]) {
      charsCount[chars[i]]++
    } else {
      charsCount[chars[i]] = 1
    }
  }

  const wordsLength = words.length

  for (let i = 0; i < wordsLength; i++) {
    const element = words[i]
    let sum = 0
    const elementLength = element.length

    const countElement: Record<string, number> = {}
    for (let i = 0; i < elementLength; i++) {
      if (countElement[element[i]]) {
        countElement[element[i]]++
      } else {
        countElement[element[i]] = 1
      }
    }
    let error = false
    for (const key in countElement) {
      if (
        countElement[key] > charsCount[key] ||
        charsCount[key] === undefined
      ) {
        error = true
        break
      }
    }
    if (error === false) {
      result += elementLength
    }
  }
  return result
}

console.log(countCharacters(words, chars))
