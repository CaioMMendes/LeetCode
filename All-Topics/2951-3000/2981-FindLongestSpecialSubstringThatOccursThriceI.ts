const s = "aaaa"

/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s: string) {
  const count: Record<string, number> = {}

  for (let i = 0; i < s.length; i++) {
    let string = s[i]
    if (count[string]) {
      count[string]++
    } else {
      count[string] = 1
    }
    for (let j = i + 1; j < s.length; j++) {
      if (!string.includes(s[j])) break
      string += s[j]
      if (count[string]) {
        count[string]++
      } else {
        count[string] = 1
      }
    }
  }

  let result = -1
  for (let key in count) {
    if (count[key] < 3) continue
    if (key.length > result) {
      result = key.length
    }
  }
  return result
}

console.log(maximumLength(s))
