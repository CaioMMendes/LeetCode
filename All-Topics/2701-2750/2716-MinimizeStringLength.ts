const s = "aaabc"

/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s: string) {
  return new Set(s.split("")).size
}

console.log(minimizedStringLength(s))
