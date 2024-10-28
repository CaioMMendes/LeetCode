const n = 50

/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n: number) {
  const bits = n.toString(2)
  const length = bits.length
  const indexes = []
  const result = [0, 0]
  for (let i = 0; i < length; i++) {
    if (bits[length - i - 1] === "1") {
      indexes.push(i)
    }
  }

  for (const value of indexes) {
    if (value % 2 === 0) {
      result[0]++
    } else {
      result[1]++
    }
  }

  return result
}

console.log(evenOddBit(n))
