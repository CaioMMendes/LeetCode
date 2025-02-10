const s = "2523533"

/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function (s: string) {
  let count: Record<string, number> = {}

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]]) {
      count[s[i]]++
    } else {
      count[s[i]] = 1
    }
  }

  for (let i = 1; i < s.length; i++) {
    if (
      s[i] !== s[i - 1] &&
      count[s[i]] === Number(s[i]) &&
      count[s[i - 1]] === Number(s[i - 1])
    ) {
      return `${s[i - 1]}${s[i]}`
    }
  }

  return ""
}

console.log(findValidPair(s))
