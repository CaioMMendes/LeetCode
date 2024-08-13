const s = "abc",
  t = "bac"

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s: string, t: string) {
  const sLength = s.length
  let result = 0
  for (let i = 0; i < sLength; i++) {
    result += Math.abs(i - t.indexOf(s[i]))
  }

  return result
}

console.log(findPermutationDifference(s, t))
