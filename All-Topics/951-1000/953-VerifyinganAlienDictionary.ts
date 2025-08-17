const words = ["hello", "leetcode"],
  order = "hlabcdefgijkmnopqrstuvwxyz"

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words: string[], order: string) {
  const sorted = words.slice().sort((a, b) => {
    const indexA = order.indexOf(a[0])
    const indexB = order.indexOf(b[0])
    if (indexA === indexB) {
      for (let i = 0; i < a.length; i++) {
        const indexA = order.indexOf(a[i])
        const indexB = order.indexOf(b[i])
        if (indexA > indexB) {
          return 1
        } else if (indexA < indexB) {
          return -1
        }
      }
      if (a.length > b.length) {
        return 1
      } else {
        return -1
      }
    } else {
      if (indexA > indexB) {
        return 1
      } else if (indexA < indexB) {
        return -1
      }
    }
    return 1
  })

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== words[i]) return false
  }

  return true
}

console.log(isAlienSorted(words, order))
