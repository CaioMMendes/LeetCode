const s = "aabc",
  x = "a",
  y = "c"

/**
 * @param {string} s
 * @param {character} x
 * @param {character} y
 * @return {string}
 */
var rearrangeString = function (s: string, x: string, y: string) {
  let count: Record<string, number> = {}

  for (const val of s) {
    if (count[val]) {
      count[val]++
    } else {
      count[val] = 1
    }
  }

  let result = ""

  for (let i = 0; i < count?.[y]; i++) {
    result += y
  }
  for (let i = 0; i < count?.[x]; i++) {
    result += x
  }

  for (const key in count) {
    if (key === y || key === x) continue
    for (let i = 0; i < count[key]; i++) {
      result += key
    }
  }

  return result
}

console.log(rearrangeString(s, x, y))
