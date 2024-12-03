const s = "LeetcodeHelpsMeLearn",
  spaces = [8, 13, 15]

/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s: string, spaces: number[]) {
  const length = spaces.length
  const result = []
  let last = 0
  for (let i = 0; i < length; i++) {
    result.push(s.slice(last, spaces[i]))
    last = spaces[i]
  }
  result.push(s.slice(last, s.length))

  return result.join(" ")
}

console.log(addSpaces(s, spaces))
