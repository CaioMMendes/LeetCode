const words = ["$easy$", "$problem$"],
  separator = "$"

/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words: string[], separator: string) {
  return words
    .flatMap((string) => string.split(separator))
    .filter((string) => string !== "")
}

console.log(splitWordsBySeparator(words, separator))
