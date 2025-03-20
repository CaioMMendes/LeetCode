const s = "10101",
  k = 1

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s: string, k: number) {
  let result = 0

  for (let i = 0; i < s.length; i++) {
    const count: Record<string, number> = { "0": 0, "1": 0 }
    count[s[i]]++
    result++
    for (let j = i + 1; j < s.length; j++) {
      count[s[j]]++
      if (count["0"] > k && count["1"] > k) {
        count["0"] = 0
        count["1"] = 0
        break
      } else {
        result++
      }
    }
  }

  return result
}

console.log(countKConstraintSubstrings(s, k))
