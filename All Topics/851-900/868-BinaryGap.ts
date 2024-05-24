const n = 5

/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n: number) {
  const binary = n.toString(2)
  const binaryLength = binary.length
  let current = -1
  let result = 0

  for (let index = 0; index < binaryLength; index++) {
    if (binary[index] === "1") {
      if (current === -1) {
        current = index
        continue
      }

      if (result < index - current) {
        result = index - current
      }
      current = index
    }
  }

  return result
}

console.log(binaryGap(n))
