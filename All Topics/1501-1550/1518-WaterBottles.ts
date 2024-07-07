const numBottles = 15,
  numExchange = 8

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles: number, numExchange: number) {
  let result = numBottles

  while (numBottles >= numExchange) {
    const tempBottles = numBottles
    numBottles = Math.floor(numBottles / numExchange)
    result += numBottles
    numBottles += tempBottles % numExchange
  }
  return result
}

console.log(numWaterBottles(numBottles, numExchange))
