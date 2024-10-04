const s = "abccbaacz"

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s: string) {
  const length = s.length
  const set = new Set()

  for (let i = 0; i < length; i++) {
    if (set.has(s[i])) {
      return s[i]
    } else {
      set.add(s[i])
    }
  }
}

console.log(repeatedCharacter(s))
