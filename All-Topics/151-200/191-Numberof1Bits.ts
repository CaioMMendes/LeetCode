const n = 1431655765

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n: number) {
  const binary = n.toString(2)

  const StringBinary = binary.toString().replace(/0/g, "")

  return StringBinary.length
}

console.log(hammingWeight(n))
