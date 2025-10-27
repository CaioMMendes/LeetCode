const n = 1020030

/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function (n: number) {
  const regex = /0/g

  return Number(String(n).replace(regex, ""))
}

console.log(removeZeros(n))
