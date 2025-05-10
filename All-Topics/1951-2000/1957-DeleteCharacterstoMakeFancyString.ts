const s = "leeetcode"

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s: string) {
  let result = s.replace(/(.)\1{1,}/g, "$1$1")

  return result
}

console.log(makeFancyString(s))
