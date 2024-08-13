const s = "cb34"

/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s: string) {
  let length = 0
  let clearString = s

  while (true) {
    clearString = clearString.replace(/[^0-9][0-9]/g, "")
    if (clearString.length === length) {
      return clearString
    } else {
      length = clearString.length
    }
  }

  return ""
}

console.log(clearDigits(s))
