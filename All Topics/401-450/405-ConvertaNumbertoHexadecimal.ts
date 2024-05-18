const num = -1

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num: number) {
  let number = num
  if (num < 0) {
    number = 0xffffffff + num + 1
  }
  return number.toString(16)
}

console.log(toHex(num))
