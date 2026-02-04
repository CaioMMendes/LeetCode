const coins = [1, 2, 5],
  amount = 11

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins: number[], amount: number) {
  coins.sort((a, b) => b - a)
  const memo = new Map()

  let result = Infinity

  if (amount === 0) return 0

  getCoins(0, 0)

  return result === Infinity ? -1 : result

  function getCoins(current: number, count: number) {
    // poda: já é pior que a melhor solução encontrada
    if (count >= result) return

    // memoização
    if (memo.has(current) && memo.get(current) <= count) return
    memo.set(current, count)

    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i]
      const next = current + coin

      if (next === amount) {
        result = Math.min(result, count + 1)
        return
      }

      if (next < amount) {
        getCoins(next, count + 1)
      }
    }
  }
}

console.log(coinChange(coins, amount))
