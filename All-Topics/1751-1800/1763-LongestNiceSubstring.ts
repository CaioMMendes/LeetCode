const s = "YazaAay"

/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s: string) {
  let result = ""

  for (let i = 0; i < s.length; i++) {
    let string = s[i]
    const set = new Set<string>()
    set.add(s[i])
    for (let j = i + 1; j < s.length; j++) {
      string += s[j]
      set.add(s[j])
      let error = false
      for (let val of set) {
        if (set.has(val.toUpperCase()) && set.has(val.toLowerCase())) continue
        error = true
      }

      if (!error && string.length > result.length) {
        result = string
      }
    }
  }

  return result
}

console.log(longestNiceSubstring(s))
