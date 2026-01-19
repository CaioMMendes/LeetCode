const s = "cooear"

/**
 * @param {string} s
 * @return {number}
 */
var vowelConsonantScore = function (s: string) {
  let v = 0
  let c = 0

  const vowels = new Set(["a", "e", "i", "o", "u"])
  const digits = new Set([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    " ",
  ])

  for (const val of s) {
    if (vowels.has(val)) {
      v++
      continue
    }

    if (!digits.has(val)) {
      c++
    }
  }

  if (c > 0) return Math.floor(v / c)

  return 0
}

console.log(vowelConsonantScore(s))
