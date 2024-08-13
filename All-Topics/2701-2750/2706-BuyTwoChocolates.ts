const prices = [1, 2, 2],
  money = 3

/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices: number[], money: number) {
  let min = +Infinity
  let second = +Infinity

  const length = prices.length

  for (let i = 0; i < length; i++) {
    if (prices[i] <= min) {
      second = min
      min = prices[i]
    } else if (prices[i] <= second) {
      second = prices[i]
    }
  }
  const result = money - min - second
  if (result < 0) {
    return money
  }
  return result
}

console.log(buyChoco(prices, money))
