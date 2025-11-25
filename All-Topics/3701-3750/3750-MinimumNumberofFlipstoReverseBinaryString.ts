const n = 7

/**
 * @param {number} n
 * @return {number}
 */
var minimumFlips = function (n: number) {
  const binary = n.toString(2)
  const reversed = binary.split("").reverse().join("")
  let result = 0
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] !== reversed[i]) result++
  }
  return result
}

console.log(minimumFlips(n))
