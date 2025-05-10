const word = "abcde"

/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word: string) {
  let result = ""
  let currentChar = word[0]
  let count = 1
  const wordLength = word.length

  for (let i = 1; i < wordLength; i++) {
    if (currentChar === word[i]) {
      if (count >= 9) {
        result += count + currentChar
        currentChar = word[i]
        count = 1
        continue
      }
      count++
    } else {
      result += count + currentChar
      currentChar = word[i]
      count = 1
    }
  }

  result += (count > 0 ? count : "") + currentChar

  return result
}

console.log(compressedString(word))
