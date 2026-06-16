const s = "a#b%*"

/**
 * @param {string} s
 * @return {string}
 */
var processStr = function (s: string) {
  let result: string[] = []

  for (const val of s) {
    if (val === "#") {
      result = [...result, ...result]
    } else if (val === "*") {
      result.pop()
    } else if (val === "%") {
      result = result.reverse()
    } else {
      result.push(val)
    }
  }

  return result.join("")
}

console.log(processStr(s))
