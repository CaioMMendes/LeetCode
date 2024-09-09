const s = "ab",
  goal = "ba"

type ArrayType = string | number

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s: string, goal: string) {
  if (s.length !== goal.length) {
    return false
  }

  let firstLetter: ArrayType[] | null = null
  let secondLetter: ArrayType[] | null = null
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      if (!firstLetter) {
        firstLetter = [i, s[i]]
      } else {
        secondLetter = [i, s[i]]
        break
      }
    }
  }

  if (firstLetter && secondLetter) {
    s =
      s.slice(0, Number(firstLetter[0])) +
      secondLetter[1] +
      s.slice(Number(firstLetter[0]) + 1)
    s =
      s.slice(0, Number(secondLetter[0])) +
      firstLetter[1] +
      s.slice(Number(secondLetter[0]) + 1)
    if (s === goal) {
      return true
    } else {
      return false
    }
  }

  if (
    (firstLetter === null && secondLetter !== null) ||
    (secondLetter === null && firstLetter !== null)
  )
    return false

  const set = new Set(s.split(""))
  if (set.size !== s.length) return true

  return false
}

console.log(buddyStrings(s, goal))
