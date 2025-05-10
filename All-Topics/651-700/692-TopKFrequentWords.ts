const words = ["i", "love", "leetcode", "i", "love", "coding"],
  k = 2

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words: string[], k: number) {
  const count = new Map()

  for (const val of words) {
    if (count.get(val)) {
      count.set(val, count.get(val) + 1)
    } else {
      count.set(val, 1)
    }
  }

  const sorted = [...count].sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0].localeCompare(b[0])
    }
    return b[1] - a[1]
  })
  return sorted.slice(0, k).map((val) => val[0])
}

console.log(topKFrequent(words, k))
