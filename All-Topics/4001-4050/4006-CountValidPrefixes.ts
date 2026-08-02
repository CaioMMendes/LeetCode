const s = "00101"

/**
 * @param {string} s
 * @return {number}
 */
var countValidPrefixes = function (s: string) {
  const count: Record<string, number> = { "0": 0, "1": 0 }
  let result = 0

  for (let i = 0; i < s.length; i++) {
    count[s[i]]++
    const limit = Math.floor((i + 1) / 2)
    if (count["0"] >= limit && count["1"] >= limit) result++
  }

  return result
}

console.log(countValidPrefixes(s))
