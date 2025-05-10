const word = "a123bc34d8ef34"

/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word: string) {
  const matched = word.match(/\d+/g)?.map(BigInt)
  return new Set(matched).size
}

console.log(numDifferentIntegers(word))
