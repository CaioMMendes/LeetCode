const n = 5

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n: number) {
  let result = 0
  let count = 1
  while (true) {
    if (n >= count) {
      result++
      n -= count
      count++
    } else {
      break
    }
  }
  return result
}

console.log(arrangeCoins(n))
