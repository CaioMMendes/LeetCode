const words = ["adc", "wzy", "abc"]

/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words: string[]) {
  const alphabet: Record<string, number> = {
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

  const diff: Record<string, string> = {}

  const length = words.length
  for (let i = 0; i < length; i++) {
    const arr = []
    const element = words[i]
    for (let j = 1; j < element.length; j++) {
      const math = alphabet[element[j]] - alphabet[element[j - 1]]
      arr.push(math)
    }
    const string = String(arr)
    if (diff[string]) {
      const keys = Object.keys(diff)
      if (keys.length > 1) {
        for (let key in diff) {
          if (key !== string) {
            return diff[key]
          }
        }
      }
    } else {
      diff[string] = element
    }
  }

  const keys = Object.keys(diff)
  return diff[keys[keys.length - 1]]
}

console.log(oddString(words))
