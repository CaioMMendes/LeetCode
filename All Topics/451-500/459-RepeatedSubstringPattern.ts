// const s = "a"
const s = "a"

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const sLength = s.length
  const half = Math.floor(sLength / 2)
  let element = ""
  for (let i = 0; i < half; i++) {
    element += s[i]
    const rest = sLength % element.length
    if (rest !== 0) continue
    const elementLength = sLength / element.length
    let test = ""
    for (let k = 0; k < elementLength; k++) {
      test += element
    }
    if (s === test) {
      return true
    }
  }
  return false
}

console.log(repeatedSubstringPattern(s))
