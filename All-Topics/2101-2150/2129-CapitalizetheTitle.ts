const title = "capiTalIze tHe titLe"

/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title: string) {
  return title
    .split(" ")
    .map((word) => {
      const wordLower = word.toLowerCase()
      if (word.length <= 2) {
        return wordLower
      }
      return (
        wordLower.slice(0, 1).toUpperCase() +
        wordLower.slice(1, wordLower.length)
      )
    })
    .join(" ")
}

console.log(capitalizeTitle(title))
