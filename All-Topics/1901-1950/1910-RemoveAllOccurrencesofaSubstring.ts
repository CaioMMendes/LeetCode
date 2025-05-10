const s = "daabcbaabcbc",
  part = "abc"

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s: string, part: string) {
  while (true) {
    const newString = s.replace(part, "")
    if (newString.length === s.length) return newString
    s = newString
  }
  return s
}

console.log(removeOccurrences(s, part))
