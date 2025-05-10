const n = 4

/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n: number) {
  let result = ""
  if (n % 2 !== 0) {
    return result.padStart(n, "a")
  }
  result += "b"
  return result.padStart(n, "a")
}

console.log(generateTheString(n))
