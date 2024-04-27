const s = "badc",
  t = "baba"
// const s = "egg",
//   t = "add"
// const s = "bbbaaaba",
//   t = "aaabbbba"

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s: string, t: string) {
  const obj = {}
  const characters = {}

  const result = s.split("").every((element, index) => {
    if (!obj[element] && !characters[t[index]]) {
      obj[element] = t[index]
      characters[t[index]] = 1
    } else {
      if (obj[element] !== t[index]) {
        return false
      }
    }
    return true
  })
  return result
}

console.log(isIsomorphic(s, t))
