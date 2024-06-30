const allowed = "ab",
  words = ["ad", "bd", "aaab", "baa", "badab"]

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  const count = {}

  const allowedLength = allowed.length

  for (let i = 0; i < allowedLength; i++) {
    if (!count[allowed[i]]) {
      count[allowed[i]] = true
    }
  }

  let result = 0
  const keys: string[] = Object.keys(count)

  const wordsLength = words.length

  for (let i = 0; i < wordsLength; i++) {
    const unique: any[] = [...new Set(words[i])]

    const uniqueLength = unique.length
    for (let j = 0; j < uniqueLength; j++) {
      if (!keys.includes(unique[j])) {
        break
      }
      if (j === uniqueLength - 1) {
        result++
      }
    }
  }

  return result
}

console.log(countConsistentStrings(allowed, words))
