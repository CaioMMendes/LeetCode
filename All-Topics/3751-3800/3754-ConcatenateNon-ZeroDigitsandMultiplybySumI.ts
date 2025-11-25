const n = 10203004

/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function (n: number) {
  const str = String(n).replace(/0/g, "")
  const sum = str.split("").reduce((acc, cur) => acc + Number(cur), 0)
  return Number(str) * sum
}

console.log(sumAndMultiply(n))
