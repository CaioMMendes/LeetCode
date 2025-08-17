const piles = [2, 4, 1, 2, 7, 8]

/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles: number[]) {
  const sort = piles.sort((a, b) => a - b)
  const numberOfTimes = piles.length / 3

  let result = 0
  for (let i = 0; i < numberOfTimes; i++) {
    result += piles[piles.length - 2 - i * 2]
  }

  return result
}

console.log(maxCoins(piles))
