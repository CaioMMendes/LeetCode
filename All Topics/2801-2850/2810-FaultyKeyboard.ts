const s = "string"

/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s: string) {
  let splited = s.split("")
  const length = splited.length

  for (let i = 0; i < length; i++) {
    if (splited[i] === "i") {
      const firstPart = splited.splice(0, i).reverse()
      const secondPart = splited.splice(1, length - 1)
      splited = [...firstPart, ...secondPart]
      i--
    }
  }

  return splited.join("")
}

console.log(finalString(s))
