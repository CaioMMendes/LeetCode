const words = ["a", "aba", "ababa", "aa"]

/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words: string[]) {
  let result = 0

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      result += isPrefixAndSufix(words[i], words[j]) ? 1 : 0
    }
  }

  return result

  function isPrefixAndSufix(str1: string, str2: string) {
    const length = str1.length

    const prefix = str2.slice(0, length)
    const sufix = str2.slice(str2.length - length, str2.length)

    if (prefix === str1 && sufix === str1) return true
  }
}

console.log(countPrefixSuffixPairs(words))
