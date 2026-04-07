const n = 33

/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n: number) {
  const result = new Set()

  const alphabet = ["a", "e", "i", "o", "u"]

  generatePossibilities("")

  function generatePossibilities(str: string) {
    if (str.length === n) {
      result.add(str)
      return
    }

    const lastVowel = str?.[str.length - 1]

    if (lastVowel === undefined) {
      for (const val of alphabet) {
        generatePossibilities(val)
      }
    } else {
      const index = alphabet.indexOf(lastVowel)

      for (let i = index; i < alphabet.length; i++) {
        generatePossibilities(`${str}${alphabet[i]}`)
      }
    }
  }

  return result.size
}

console.log(countVowelStrings(n))
