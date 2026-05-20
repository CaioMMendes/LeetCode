const s = "aaaabbbbcccc"

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s: string) {
  const count: Record<string, number> = {}

  for (const val of s) {
    if (count[val]) {
      count[val]++
    } else {
      count[val] = 1
    }
  }

  const sortedLetters = Object.keys(count).sort((a, b) => a.localeCompare(b))
  const sortedReversed = sortedLetters.slice().reverse()

  let result = ""
  let stop = s.length

  while (stop > 0) {
    for (const val of sortedLetters) {
      if (count[val] >= 1) {
        result += val
        count[val]--
        stop--
      }
    }

    for (const val of sortedReversed) {
      if (count[val] >= 1) {
        result += val
        count[val]--
        stop--
      }
    }
  }

  return result
}

console.log(sortString(s))
