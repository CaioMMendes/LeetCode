const s = "PPALLP"

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s: string) {
  if (s.match(/LLL/g)) {
    return false
  }
  const length = s.length
  let count = 0
  for (let i = 0; i < length; i++) {
    if (s[i] === "A") {
      count++
      if (count === 2) {
        return false
      }
    }
  }
  return true
}

console.log(checkRecord(s))
