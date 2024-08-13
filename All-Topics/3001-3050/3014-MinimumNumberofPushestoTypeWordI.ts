const word = "xycdefgghijjj"

/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word: string) {
  const length = word.length
  const count = {}

  for (let i = 0; i < length; i++) {
    if (count[word[i]]) {
      count[word[i]]++
    } else {
      count[word[i]] = 1
    }
  }
  const valuesArray: number[] = []

  for (const key in count) {
    valuesArray.push(count[key])
  }

  valuesArray.sort((a, b) => b - a)

  return valuesArray.reduce((acc, cur, index) => {
    if (index < 8) {
      return acc + cur * 1
    }
    if (index < 16) {
      return acc + cur * 2
    }
    if (index < 24) {
      return acc + cur * 3
    }
    return acc + cur * 4
  }, 0)
}

console.log(minimumPushes(word))
