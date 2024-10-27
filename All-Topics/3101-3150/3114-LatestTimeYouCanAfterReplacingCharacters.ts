const s = "1?:?4"

/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function (s: string) {
  let result = ""
  if (s[0] === "?") {
    if (s[1] < "2" || s[1] === "?") {
      result += "1"
    } else {
      result += "0"
    }
  } else {
    result += s[0]
  }

  if (s[1] === "?") {
    if (s[0] === "0") {
      result += "9"
    } else {
      result += "1"
    }
  } else {
    result += s[1]
  }
  result += ":"
  if (s[3] === "?") {
    result += "5"
  } else {
    result += s[3]
  }

  if (s[4] === "?") {
    result += "9"
  } else {
    result += s[4]
  }

  return result
}

console.log(findLatestTime(s))
