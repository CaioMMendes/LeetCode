const jewels = "aA",
  stones = "aAAbbbb"

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels: string, stones: string) {
  let result = 0
  const stonesLength = stones.length

  for (let i = 0; i < stonesLength; i++) {
    if (jewels.includes(stones[i])) result++
  }
  return result
}

console.log(numJewelsInStones(jewels, stones))
