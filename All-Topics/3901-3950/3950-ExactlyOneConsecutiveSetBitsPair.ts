const n = 12

/**
 * @param {number} n
 * @return {boolean}
 */
var consecutiveSetBits = function (n: number) {
  let result = false
  const binary = n.toString(2)

  for (let i = 1; i < binary.length; i++) {
    if (binary[i] === "0") continue
    if (binary[i] === binary[i - 1]) {
      if (result) return false

      result = true
    }
  }

  return result
}

console.log(consecutiveSetBits(n))
