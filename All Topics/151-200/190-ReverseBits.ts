const n = 0b0000010100101000001111010011100
// const n = 10100101000001111010011100

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n: number) {
  const string = Number(n.toString())
    .toString(2)
    .split("")
    .reverse()
    .join("")
    .padEnd(32, "0")

  return parseInt(string, 2)
}
