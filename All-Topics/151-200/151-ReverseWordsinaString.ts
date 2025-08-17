const s = "the sky is blue"

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s: string) {
  s = s.trim()
  s = s.replace(/\s+/g, " ")
  return s.split(" ").reverse().join(" ")
}

console.log(reverseWords(s))
