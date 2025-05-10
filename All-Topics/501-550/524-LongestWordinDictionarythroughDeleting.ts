const s = "abpcplea",
  dictionary = ["ale", "apple", "monkey", "plea"]

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s: string, dictionary: string[]) {
  const sorted = dictionary.sort((a, b) => {
    if (a.length === b.length) return a.localeCompare(b)
    return b.length - a.length
  })

  for (const val of sorted) {
    let currentIndex = 0

    for (let i = 0; i < s.length; i++) {
      if (val[currentIndex] === s[i]) {
        currentIndex++
        if (currentIndex >= val.length) return val
      }
    }
  }

  return ""
}

console.log(findLongestWord(s, dictionary))
