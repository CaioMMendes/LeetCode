const sentence = "I speak Goat Latin"

/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence: string) {
  const splited = sentence.split(" ")
  const vowels = ["a", "e", "i", "o", "u"]

  const maped = splited.map((word, i) => {
    let newWord = ""

    if (vowels.includes(word[0].toLowerCase())) {
      newWord += word
      newWord += "ma"
    } else {
      const spliced = word.slice(1)
      newWord += spliced
      newWord += word[0]
      newWord += "ma"
    }

    const a = "".padStart(i + 1, "a")

    newWord += a
    return newWord
  })

  return maped.join(" ")
}

console.log(toGoatLatin(sentence))
