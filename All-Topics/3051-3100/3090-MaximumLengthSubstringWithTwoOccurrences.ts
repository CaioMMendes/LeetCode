const s = "bcbbbcba"

/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s: string) {
  let init = 0
  let end = 0
  const count: Record<string, number> = {}
  let result = 0
  for (let i = 0; i < s.length; i++) {
    const element = s[i]
    if (count[element]) {
      count[element]++
    } else {
      count[element] = 1
    }
    end++
    if (count[element] <= 2) {
      if (end - init > result) result = end - init
      continue
    }
    while (count[element] > 2) {
      count[s[init]]--
      init++
    }
  }
  return result
}

console.log(maximumLengthSubstring(s))
