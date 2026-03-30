const s = "abcacbd"

/**
 * @param {string} s
 * @return {number}
 */
var firstMatchingIndex = function (s: string) {
  for (let i = 0; i < s.length; i++) {
    const letter = s[s.length - 1 - i]

    if (letter === s[i]) return i
  }

  return -1
}

console.log(firstMatchingIndex(s))
