const s = "10010100"

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s: string) {
  let result = 0
  let last = "1"

  for (let i = 0; i < s.length; i++) {
    if (last === s[i]) {
      last = last === "0" ? "1" : "0"
      continue
    }
    last = last === "0" ? "1" : "0"
    result++
  }

  let result2 = 0
  let last2 = "0"

  for (let i = 0; i < s.length; i++) {
    if (last2 === s[i]) {
      last2 = last2 === "0" ? "1" : "0"
      continue
    }
    last2 = last2 === "0" ? "1" : "0"
    result2++
  }

  return Math.min(result2, result)
}

console.log(minOperations(s))
