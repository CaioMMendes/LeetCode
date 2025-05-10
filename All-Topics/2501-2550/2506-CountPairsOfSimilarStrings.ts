const words = ["aba", "aabb", "abcd", "bac", "aabc"]

/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words: string[]) {
  const count: Record<string, number> = {}
  let result = 0
  function fatorial(val: number) {
    let sum = 1
    for (let i = val; i > 1; i--) {
      sum *= i
    }
    return sum
  }

  for (let i = 0; i < words.length; i++) {
    const letters: Record<string, number> = {}
    const element = words[i]
    for (let j = 0; j < element.length; j++) {
      if (letters[element[j]]) {
        letters[element[j]]++
      } else {
        letters[element[j]] = 1
      }
    }

    const keys = Object.keys(letters).sort().join("")
    if (count[keys]) {
      count[keys]++
    } else {
      count[keys] = 1
    }
  }

  for (let key in count) {
    if (count[key] > 1) {
      result += fatorial(count[key]) / (2 * fatorial(count[key] - 2))
    }
  }
  return result
}

console.log(similarPairs(words))
