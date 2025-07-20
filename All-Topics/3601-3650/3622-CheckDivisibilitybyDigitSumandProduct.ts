const n = 99

/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function (n: number) {
  const splited = String(n).split("").map(Number)
  const sum = splited.reduce((acc, cur) => acc + cur, 0)
  let product = splited.reduce((acc, cur) => acc * cur, 1)
  if (n === 0) product = 0

  return n % (product + sum) === 0
}

console.log(checkDivisibility(n))
