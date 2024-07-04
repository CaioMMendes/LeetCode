const s = "foobar",
  letter = "o"

/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s: string, letter: string) {
  const sLength = s.length
  let count = 0
  for (let i = 0; i < sLength; i++) {
    if (s[i] === letter) {
      count++
    }
  }

  return Math.floor((count / sLength) * 100)
}

console.log(percentageLetter(s, letter))
