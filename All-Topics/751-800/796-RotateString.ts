const s = "abcde",
  goal = "cdeab"

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s: string, goal: string) {
  const goalLength = goal.length
  const length = s.length

  if (goalLength !== length) return false

  if (s === goal) return true

  for (let i = 0; i < length; i++) {
    s = s + s[0]
    s = s.slice(1, length + 1)
    if (s === goal) return true
  }

  return false
}

console.log(rotateString(s, goal))
