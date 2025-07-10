const words = ["abba", "baba", "bbaa", "cd", "cd"]

/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words: string[]) {
  const result = [words[0]]
  let last = words[0]
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("")

  for (let i = 1; i < words.length; i++) {
    const ordened = words[i]
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("")

    if (ordened === last) continue
    last = ordened
    result.push(words[i])
  }

  return result
}

console.log(removeAnagrams(words))
