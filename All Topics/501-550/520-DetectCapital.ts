const word = "Hla"

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word: string) {
  if (word.toUpperCase() === word) return true
  if (word.toLowerCase() === word) return true

  const newWord = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()

  if (newWord === word) return true
  return false
}

console.log(detectCapitalUse(word))
