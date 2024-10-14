const x = 1,
  y = 4

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x: number, y: number) {
  let binaryX = x.toString(2)
  let binaryY = y.toString(2)
  let result = 0

  const max = x >= y ? binaryX.length : binaryY.length

  binaryX = binaryX.padStart(max, "0")
  binaryY = binaryY.padStart(max, "0")

  for (let i = 0; i < max; i++) {
    if (binaryX[i] !== binaryY[i]) {
      result++
    }
  }
  return result
}

console.log(hammingDistance(x, y))
