const n = 31

/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n: number) {
  const split = String(n).split("")

  let max1 = Number(split[0] >= split[1] ? split[0] : split[1])
  let max2 = Number(split[0] > split[1] ? split[1] : split[0])

  for (let i = 2; i < split.length; i++) {
    const number = Number(split[i])
    if (number >= max1) {
      max2 = max1
      max1 = number
    } else if (number > max2) {
      max2 = number
    }
  }

  return max1 * max2
}

console.log(maxProduct(n))
