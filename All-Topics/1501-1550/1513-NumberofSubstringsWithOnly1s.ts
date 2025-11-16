const s = "0110111"

/**
 * @param {string} s
 * @return {number}
 */
var numSub = function (s: string) {
  const strings = s.match(/1+/g)

  if (!strings) return 0

  let result = 0

  for (const val of strings) {
    const length = val.length

    const math = (length / 2) * (length + 1)
    result = (result + math) % 1000000007
  }

  return result
}

console.log(numSub(s))
