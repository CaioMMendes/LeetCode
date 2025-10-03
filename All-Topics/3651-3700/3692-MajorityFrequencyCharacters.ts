const s = "aaabbbccdddde"

/**
 * @param {string} s
 * @return {string}
 */
var majorityFrequencyGroup = function (s: string) {
  let count: Record<string, number> = {}
  let frequency: Map<number, number> = new Map()

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]]) {
      count[s[i]]++
    } else {
      count[s[i]] = 1
    }
  }

  for (let key in count) {
    if (frequency.has(count[key])) {
      frequency.set(count[key], frequency.get(count[key]) ?? 0 + 1)
    } else {
      frequency.set(count[key], 1)
    }
  }

  let max = 0
  let numberOfOcurrency = 0

  for (const [key, val] of frequency) {
    if (val > max) {
      numberOfOcurrency = key
      max = val
    } else if (val === max && key > numberOfOcurrency) {
      numberOfOcurrency = key
      max = val
    }
  }

  let result = ""

  for (let key in count) {
    if (count[key] === numberOfOcurrency) {
      result += key
    }
  }

  return result
}

console.log(majorityFrequencyGroup(s))
