const s = "Test1ng-Leet=code-Q!"

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s: string) {
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
  const indexes = {}

  const sLength = s.length
  let letters: string[] = []

  for (let i = 0; i < sLength; i++) {
    if (alphabet.includes(s[i].toLowerCase())) {
      letters.push(s[i])
    } else {
      indexes[i] = s[i]
    }
  }
  const keys = Object.keys(indexes)
  const result = Array(sLength)
  letters.reverse()
  let count = 0

  for (let i = 0; i < sLength; i++) {
    if (keys.includes(String(i))) {
      result[i] = indexes[String(i)]
    } else {
      result[i] = letters[count]
      count++
    }
  }

  return result.join("")
}

console.log(reverseOnlyLetters(s))
