const n = 232,
  x = 2

/**
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var validDigit = function (n: number, x: number) {
  const string = String(n)
  const stringX = String(x)

  if (string[0] === stringX) return false

  for (const letter of string) {
    if (stringX === letter) return true
  }

  return false
}

console.log(validDigit(n, x))
