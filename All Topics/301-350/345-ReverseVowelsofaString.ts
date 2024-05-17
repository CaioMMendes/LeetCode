const s = "hello"

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s: string) {
  const vowelsCheck = {
    "a": true,
    "e": true,
    "i": true,
    "o": true,
    "u": true,

    "A": true,
    "E": true,
    "I": true,
    "O": true,
    "U": true,
  }

  const vowels: string[] = []

  const sLength = s.length

  for (let i = 0; i < sLength; i++) {
    if (vowelsCheck[s[i]]) {
      vowels.push(s[i])
    }
  }
  vowels.reverse()
  let count = 0
  let newS = s.split("")

  for (let i = 0; i < sLength; i++) {
    if (vowelsCheck[s[i]]) {
      newS[i] = vowels[count]
      count++
    }
  }

  return newS.join("")
}

console.log(reverseVowels(s))
