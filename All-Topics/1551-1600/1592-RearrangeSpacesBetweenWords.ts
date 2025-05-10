const text = "  this   is  a sentence "

/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text: string) {
  const whiteSpaces = text.match(/\s/g)?.length
  const splited = text.split(" ")
  const filtered = splited.filter((str) => {
    if (str.match(/^\s*$/)) {
      return false
    }

    return true
  })
  if (filtered.length > 1 && whiteSpaces !== undefined) {
    const numberOfSpaces = Math.floor(whiteSpaces / (filtered.length - 1))
    const spaces = "".padStart(numberOfSpaces, " ")
    const spacesEnd = whiteSpaces % (filtered.length - 1)
    const filteredLength = filtered.length

    return filtered
      .map((str, i) => {
        if (i === filteredLength - 1) {
          return str + "".padStart(spacesEnd, " ")
        }

        return str + spaces
      })
      .join("")
  }
  return filtered[0] + "".padEnd(whiteSpaces, " ")
}

console.log(reorderSpaces(text))
