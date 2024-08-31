const s = "aAbBcC"

/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s: string) {
  let result = 0
  const length = s.length
  let last = s[0]
  for (let i = 1; i < length; i++) {
    if (last.toLowerCase() !== s[i].toLowerCase()) {
      result++
    }
    last = s[i]
  }

  return result
}

console.log(countKeyChanges(s))
