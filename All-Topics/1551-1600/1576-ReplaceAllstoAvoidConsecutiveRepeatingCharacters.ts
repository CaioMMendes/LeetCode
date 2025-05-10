const s = "?zs"

/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s: string) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]

  let result = ""
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "?") {
      result += s[i]
    } else {
      for (let j = 0; j < 26; j++) {
        if (result?.[i - 1] !== alphabet[j] && s?.[i + 1] !== alphabet[j]) {
          result += alphabet[j]
          break
        }
      }
    }
  }
  return result
}

console.log(modifyString(s))
