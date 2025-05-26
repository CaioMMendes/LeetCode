const s = "XXX"

/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s: string) {
  let count = 0
  let i = 0

  while (i < s.length) {
    if (s[i] === "X") {
      count++
      i += 3
    } else {
      i++
    }
  }

  return count
}

console.log(minimumMoves(s))
