const n = 537

/**
 * @param {number} n
 * @return {number[]}
 */
var decimalRepresentation = function (n: number) {
  const length = String(n).length
  const result = []
  let number = n

  for (let i = length - 1; i >= 0; i--) {
    const div = 1 * 10 ** i

    let val = Math.floor(number / div)

    val *= div
    if (val !== 0) {
      result.push(val)
    }

    number -= val
  }

  return result
}

console.log(decimalRepresentation(n))
