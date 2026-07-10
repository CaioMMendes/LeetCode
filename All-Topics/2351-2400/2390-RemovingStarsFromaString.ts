const s = "leet**cod*e"

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s: string) {
  let result = ""
  let removecount = 0

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "*") {
      removecount++
      continue
    }
    if (removecount > 0) {
      removecount--
      continue
    }
    result += s[i]
  }

  result = result.split("").reverse().join("")

  return result
}

console.log(removeStars(s))
