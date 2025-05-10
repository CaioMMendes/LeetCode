const s = "EEEEEEE"

/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s: string) {
  let current = 0
  let max = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "E") {
      current++
    } else {
      current--
    }
    if (current > max) max = current
  }
  return max
}

console.log(minimumChairs(s))
