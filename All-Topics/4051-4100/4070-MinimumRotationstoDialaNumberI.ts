const s = "0192837465"

/**
 * @param {string} s
 * @return {number}
 */
var minRotations = function (s: string) {
  let result = 0
  let current = 0

  for (const val of s) {
    const diff = Math.abs(Number(val) - current)
    result += diff > 5 ? 10 - diff : diff
    current = Number(val)
  }

  return result
}

console.log(minRotations(s))
