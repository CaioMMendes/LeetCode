const word = "aabbccddeeffgghhiiiiiikkkddffpppttpewlrewtmasxbnvzmwsdka" //83

type countType = Record<string, number>

/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word: string) {
  const count: countType | {} = {}

  for (let i = 0; i < word.length; i++) {
    if (count[word[i]]) {
      count[word[i]]++
    } else {
      count[word[i]] = 1
    }
  }
  const array: [string, number][] = []
  for (let key in count) {
    const value = count[key]
    array.push([key, value])
  }

  array.sort((a, b) => b[1] - a[1])

  let current = 1
  let multiply = 1
  let result = 0
  for (const value of array) {
    result += value[1] * multiply

    const converter = current % 8
    if (converter === 0) {
      multiply++
      current = 0
    }
    current++
  }

  return result
}

console.log(minimumPushes(word))
