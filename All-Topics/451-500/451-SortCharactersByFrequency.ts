const s = "tree"

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s: string) {
  const map = new Map()

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i])) {
      map.set(s[i], map.get(s[i]) + 1)
    } else {
      map.set(s[i], 1)
    }
  }

  const sorted = [...map].sort((a, b) => b[1] - a[1])

  const strings = sorted.map((val) => {
    return "".padStart(val[1], val[0])
  })

  return strings.join("")
}

console.log(frequencySort(s))
