const s = "leetcode"

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s: string) {
  const length = s.length
  let element = s[0]
  let cur = 1
  let result = 0

  for (let i = 1; i < length; i++) {
    if (s[i] !== element) {
      if (cur > result) {
        result = cur
      }
      element = s[i]
      cur = 1
    } else {
      cur++
    }
  }

  return result > cur ? result : cur
}

console.log(maxPower(s))
