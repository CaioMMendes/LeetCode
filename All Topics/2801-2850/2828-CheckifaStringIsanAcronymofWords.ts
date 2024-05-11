const words = ["alice", "bob", "charlie"],
  s = "abc"

/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words: string[], s: string) {
  let check = ""
  const wordsLength = words.length
  for (let i = 0; i < wordsLength; i++) {
    check += words[i][0]
  }
  return check === s
}

console.log(isAcronym(words, s))
