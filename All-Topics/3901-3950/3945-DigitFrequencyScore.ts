const n = 122

/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function (n: number) {
  const string = String(n)

  const count: Record<string, number> = {}

  for (const val of string) {
    if (count[val]) {
      count[val]++
    } else {
      count[val] = 1
    }
  }

  let result = 0

  for (const key in count) {
    result += Number(key) * count[key]
  }

  return result
}

console.log(digitFrequencyScore(n))
