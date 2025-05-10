const s = "aa"

/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s: string) {
  let count: Record<string, number[]> = {}

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]]) {
      count[s[i]].push(i)
    } else {
      count[s[i]] = [i]
    }
  }

  let result = -1

  for (const key in count) {
    const math = count[key][count[key].length - 1] - count[key][0] - 1
    if (math > result) {
      result = math
    }
  }

  return result
}

console.log(maxLengthBetweenEqualCharacters(s))
