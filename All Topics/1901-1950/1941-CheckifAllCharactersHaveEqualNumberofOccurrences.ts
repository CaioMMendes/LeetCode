const s = "aaabb"

/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s: string) {
  const count = {}
  const sLength = s.length

  for (let i = 0; i < sLength; i++) {
    if (count[s[i]]) {
      count[s[i]]++
    } else {
      count[s[i]] = 1
    }
  }

  let prev
  for (let key in count) {
    if (prev === undefined) {
      prev = count[key]
    } else {
      if (count[key] !== prev) {
        return false
      }
    }
  }

  return true
}

console.log(areOccurrencesEqual(s))
