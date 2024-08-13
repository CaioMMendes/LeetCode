const text = "jwssg",
  brokenLetters = "cyvxmtjohsbpfqaur"

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text: string, brokenLetters: string) {
  const splited = text.split(" ")

  const lettersLength = brokenLetters.length
  const splitedLength = splited.length
  let result = 0

  for (let i = 0; i < splitedLength; i++) {
    let error = false
    for (let j = 0; j < lettersLength; j++) {
      if (splited[i].includes(brokenLetters[j])) {
        error = true
        break
      }
    }

    if (!error) result++
  }

  return result
}

console.log(canBeTypedWords(text, brokenLetters))
