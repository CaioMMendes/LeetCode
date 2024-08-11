const widths = [
    10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 10, 10,
  ],
  s = "abcdefghijklmnopqrstuvwxyz"

/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths: number[], s: string) {
  const alphabet = {
    "a": 0,
    "b": 1,
    "c": 2,
    "d": 3,
    "e": 4,
    "f": 5,
    "g": 6,
    "h": 7,
    "i": 8,
    "j": 9,
    "k": 10,
    "l": 11,
    "m": 12,
    "n": 13,
    "o": 14,
    "p": 15,
    "q": 16,
    "r": 17,
    "s": 18,
    "t": 19,
    "u": 20,
    "v": 21,
    "w": 22,
    "x": 23,
    "y": 24,
    "z": 25,
  }

  const sLength = s.length
  const result = [1, 0]
  for (let i = 0; i < sLength; i++) {
    result[1] += widths[alphabet[s[i]]]
    if (result[1] > 100) {
      result[0]++
      result[1] = widths[alphabet[s[i]]]
    }
  }

  return result
}

console.log(numberOfLines(widths, s))
