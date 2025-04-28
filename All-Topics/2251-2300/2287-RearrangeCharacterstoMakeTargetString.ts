const s = "ilovecodingonleetcode",
  target = "code"

/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s: string, target: string) {
  let count: Record<string, number> = {}
  let countTarget: Record<string, number> = {}

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]]) {
      count[s[i]]++
    } else {
      count[s[i]] = 1
    }
  }

  for (let i = 0; i < target.length; i++) {
    if (countTarget[target[i]]) {
      countTarget[target[i]]++
    } else {
      countTarget[target[i]] = 1
    }
  }

  let result = 0

  while (true) {
    for (const key in countTarget) {
      if (count?.[key] === undefined) return 0

      count[key] -= countTarget[key]
      if (count[key] < 0) return result
    }
    result++
  }

  return result
}

console.log(rearrangeCharacters(s, target))
