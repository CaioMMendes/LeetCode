const words1 = ["amazon", "apple", "facebook", "google", "leetcode"],
  words2 = ["e", "o"]

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1: string[], words2: string[]) {
  const countWords1 = words1.map((word) => countLetters(word))
  const requiredWords: Record<string, number> = {}

  for (const val of words2) {
    const count = countLetters(val)

    for (const key in count) {
      if ((requiredWords?.[key] ?? 0) < count[key]) {
        requiredWords[key] = count[key]
      }
    }
  }

  return words1.filter((word, index) => {
    for (const key in requiredWords) {
      if (requiredWords[key] > (countWords1[index]?.[key] ?? 0)) return false
    }

    return true
  })

  function countLetters(str: string) {
    const count: Record<string, number> = {}

    for (let i = 0; i < str.length; i++) {
      if (count[str[i]]) {
        count[str[i]]++
      } else {
        count[str[i]] = 1
      }
    }

    return count
  }
}

console.log(wordSubsets(words1, words2))
