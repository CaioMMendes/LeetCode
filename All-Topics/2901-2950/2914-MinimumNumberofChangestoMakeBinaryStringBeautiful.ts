const s = "1001"

/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function (s: string) {
  let result = 0
  const length = s.length
  for (let i = 0; i < length; i += 2) {
    if (s[i] !== s[i + 1]) {
      result++
    }
  }
  return result
}

console.log(minChanges(s))
