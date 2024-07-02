const number = "1-23-45 6"

/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number: string) {
  const splited = number.replace(/[\s]+|[\-]/g, "").split("")

  let result = ""

  for (; splited.length > 4; ) {
    result += splited.splice(0, 3).join("") + "-"
  }
  if (splited.length === 4) {
    result += splited.splice(0, 2).join("") + "-"
    result += splited.splice(0, 2).join("")
  } else if (splited.length === 2) {
    result += splited.splice(0, 2).join("")
  } else if (splited.length === 3) {
    result += splited.splice(0, 3).join("")
  }

  return result
}

console.log(reformatNumber(number))
