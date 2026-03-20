const s = "abcd"

/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function (s: string) {
  return new Set(s.split("")).size
}

console.log(maxDistinct(s))
