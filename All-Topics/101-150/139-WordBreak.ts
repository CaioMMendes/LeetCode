const s = "leetcode",
  wordDict = ["leet", "code"]

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s: string, wordDict: string[]) {
  let result = false
  const failed = new Set()
  checkWord("")

  return result

  function checkWord(word: string) {
    if (word.length > s.length) return
    if (failed.has(word)) return
    if (word === s) {
      result = true
      return
    }

    for (const currentWord of wordDict) {
      if (s.startsWith(word + currentWord)) {
        checkWord(word + currentWord)
      }
    }
    failed.add(word)
  }
}

console.log(wordBreak(s, wordDict))
