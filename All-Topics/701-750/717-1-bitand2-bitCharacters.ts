const bits = [1, 0, 0]

/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits: number[]) {
  for (let i = 0; i < bits.length; i++) {
    if (bits[i] === 1) {
      i++
    } else if (i === bits.length - 1 && bits[i] === 0) {
      return true
    }
  }

  return false
}

console.log(isOneBitCharacter(bits))
