const s = "s"

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s: string) {
  const count = {}
  const sLength = s.length
  for (let i = 0; i < sLength; i++) {
    if (count[s[i]] !== undefined) {
      count[s[i]] = false
    } else {
      count[s[i]] = i
    }
  }
  const keys = Object.keys(count)
  const keysLength = keys.length
  let min
  for (let i = 0; i < keysLength; i++) {
    if (count[keys[i]] === false) continue
    if (!min && min !== 0) {
      min = count[keys[i]]
      continue
    }
    if (min >= count[keys[i]]) {
      min = count[keys[i]]
    }
    if (i === keysLength - 1) {
      return min
    }
  }

  return min !== undefined ? min : -1
}

console.log(firstUniqChar(s))
