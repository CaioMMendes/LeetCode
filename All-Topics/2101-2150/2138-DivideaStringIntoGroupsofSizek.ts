const s = "abcdefghi",
  k = 3,
  fill = "x"

/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s: string, k: number, fill: string) {
  const result = []
  const length = s.length
  for (let i = 0; i < length; i += k) {
    result.push(s.slice(i, i + k))
  }
  if (result[result.length - 1].length < k) {
    result[result.length - 1] = result[result.length - 1].padEnd(k, fill)
  }

  return result
}

console.log(divideString(s, k, fill))
