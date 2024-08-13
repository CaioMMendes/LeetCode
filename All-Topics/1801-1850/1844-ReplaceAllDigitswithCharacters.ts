const s = "a1b2c3d4e"

/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s: string) {
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

  const sLength = s.length
  let result = ""

  for (let i = 0; i < sLength; i++) {
    if (i % 2 === 0) {
      result += s[i]
      continue
    }

    const letter = alphabet[alphabet.indexOf(s[i - 1]) + Number(s[i])]
    result += letter
  }
  return result
}

console.log(replaceDigits(s))
