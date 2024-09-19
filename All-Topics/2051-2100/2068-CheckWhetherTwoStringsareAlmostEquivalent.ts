const word1 = "aaaa",
  word2 = "bccb"

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1: string, word2: string) {
  const length1 = word1.length
  const length2 = word2.length

  const count1: Record<string, number> = {}
  const count2: Record<string, number> = {}

  for (let i = 0; i < length1; i++) {
    if (count1[word1[i]]) {
      count1[word1[i]]++
    } else {
      count1[word1[i]] = 1
    }
  }

  for (let i = 0; i < length2; i++) {
    if (count2[word2[i]]) {
      count2[word2[i]]++
    } else {
      count2[word2[i]] = 1
    }
  }

  for (const key in count1) {
    if (count1[key] - (count2[key] ?? 0) > 3) {
      return false
    }
  }

  for (const key in count2) {
    if (count2[key] - (count1[key] ?? 0) > 3) {
      return false
    }
  }

  return true
}

console.log(checkAlmostEquivalent(word1, word2))
