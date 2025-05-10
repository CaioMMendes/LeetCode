const s = "aaaaabbc"

/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s: string) {
  const count: Record<string, number> = {}

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]]) {
      count[s[i]]++
    } else {
      count[s[i]] = 1
    }
  }

  const values = Object.values(count)

  const even = values.filter((val) => val % 2 === 0)
  const odd = values.filter((val) => val % 2 !== 0)
  const minEven = Math.min(...even)
  const maxOdd = Math.max(...odd)

  const max = Math.max(maxOdd - minEven)
  return max
}

console.log(maxDifference(s))
