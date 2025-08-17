const words1 = ["leetcode", "is", "amazing", "as", "is"],
  words2 = ["amazing", "leetcode", "is"]

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1: string[], words2: string[]) {
  const count1: Record<string, number> = {}
  const count2: Record<string, number> = {}

  for (let i = 0; i < words1.length; i++) {
    if (count1[words1[i]]) {
      count1[words1[i]]++
    } else {
      count1[words1[i]] = 1
    }
  }

  for (let i = 0; i < words2.length; i++) {
    if (count2[words2[i]]) {
      count2[words2[i]]++
    } else {
      count2[words2[i]] = 1
    }
  }

  let count = 0

  for (const key in count1) {
    if (count1[key] === 1 && count2[key] === 1) {
      count++
    }
  }

  return count
}

console.log(countWords(words1, words2))
