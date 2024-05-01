const word = "abcdefd",
  ch = "d"

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word: string, ch: string) {
  const indexOf = word.indexOf(ch)

  if (indexOf === -1) {
    return word
  }
  const halfIndex = Math.floor((indexOf + 1) / 2)
  const splitedWord = word.split("")

  for (let index = 0; index < halfIndex; index++) {
    const temp = splitedWord[index]
    console.log("teste", index, temp, splitedWord[indexOf - index])
    splitedWord[index] = splitedWord[indexOf - index]
    splitedWord[indexOf - index] = temp
  }

  //   const firstPart = word.slice(0, indexOf + 1)
  //   const secondPart = word.slice(indexOf + 1, word.length)
  //   return firstPart.split("").reverse().join("") + secondPart
  return splitedWord.join("")
}

console.log(reversePrefix(word, ch))
