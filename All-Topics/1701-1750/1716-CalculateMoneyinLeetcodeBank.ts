const n = 10

/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n: number) {
  const div = Math.floor(n / 7)
  const rest = n % 7

  let multiply = 0

  for (let i = 1; i < div; i++) {
    multiply += i * 7
  }

  let restSum = 0
  for (let i = 1; i <= rest; i++) {
    restSum += i + div
  }

  return 28 * div + multiply + restSum
}

console.log(totalMoney(n))
