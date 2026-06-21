const costs = [1, 3, 2, 4, 1],
  coins = 7

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs: number[], coins: number) {
  costs.sort((a, b) => a - b)

  let result = 0

  for (const val of costs) {
    if (coins < val) return result

    result++
    coins -= val
  }

  return result
}

console.log(maxIceCream(costs, coins))
