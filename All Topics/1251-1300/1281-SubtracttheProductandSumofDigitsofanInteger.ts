const n = 234

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n: number) {
  const nString = String(n).split("")
  const product = nString.reduce((acc, cur) => {
    return acc * Number(cur)
  }, 1)
  const sum = nString.reduce((acc, cur) => {
    return acc + Number(cur)
  }, 0)
  return product - sum
}

console.log(subtractProductAndSum(n))
