const s = "iloveleetcode",
  words = ["i", "love", "leetcode", "apples"]

/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s: string, words: string[]) {
  let current = 0

  for (const value of words) {
    const length = value.length
    const slice = s.slice(current, current + length)
    if (slice !== value) return false
    current += length

    if (current >= s.length) break
  }

  if (current !== s.length) return false
  return true
}

console.log(isPrefixString(s, words))
