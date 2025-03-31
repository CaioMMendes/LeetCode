const s = "IDID"

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s: string) {
  let min = 0
  let max = s.length

  const result = []
  if (s[0] === "I") {
    result.push(min)
    min++
  } else {
    result.push(max)
    max--
  }
  for (let i = 1; i < s.length; i++) {
    if (s[i] === "I") {
      result.push(min)
      min++
    } else {
      result.push(max)
      max--
    }
  }

  if (s[s.length - 1] === "I") {
    result.push(min)
  } else {
    result.push(max)
  }

  return result
}

console.log(diStringMatch(s))
