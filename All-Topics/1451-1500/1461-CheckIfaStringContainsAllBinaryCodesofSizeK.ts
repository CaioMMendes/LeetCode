const s = "00110110",
  k = 2

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s: string, k: number) {
  if (k > s.length) return false

  const binaries = new Set()

  for (let i = k; i <= s.length; i++) {
    binaries.add(s.slice(i - k, i))
  }

  let foundAll = true

  getBinaries("")

  return foundAll

  function getBinaries(str: string) {
    if (str.length > k) return

    getBinaries(`${str}1`)
    getBinaries(`${str}0`)

    if (str.length === k) {
      if (!binaries.has(str)) {
        foundAll = false
        return
      }
    }
  }
}

console.log(hasAllCodes(s, k))
