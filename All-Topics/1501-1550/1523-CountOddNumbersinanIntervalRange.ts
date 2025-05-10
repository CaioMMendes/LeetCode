const low = 3,
  high = 7

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low: number, high: number) {
  const interval = high - low - 1
  if (low % 2 === 0 && high % 2 === 0) {
    return Math.ceil(interval / 2)
  }
  if (low % 2 !== 0 && high % 2 !== 0) {
    return Math.floor(interval / 2) + 2
  }
  return Math.floor(interval / 2) + 1
}

console.log(countOdds(low, high))
