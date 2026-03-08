const s = "RLRRLLRLRL"

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s: string) {
  let result = 0

  let count: Record<string, number> = {
    "R": 0,
    "L": 0,
  }

  for (const val of s) {
    count[val]++

    if (count["R"] > 0 && count["L"] > 0 && count["R"] === count["L"]) {
      result++
      count = {
        "R": 0,
        "L": 0,
      }
    }
  }

  return result
}

console.log(balancedStringSplit(s))
