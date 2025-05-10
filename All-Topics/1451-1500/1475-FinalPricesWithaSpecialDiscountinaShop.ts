const prices = [8, 4, 6, 2, 3]

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices: number[]) {
  return prices.map((val, index, array) => {
    let discount = 0
    for (let i = index + 1; i < array.length; i++) {
      if (array[i] <= val) {
        discount = array[i]
        break
      }
    }
    if (val - discount >= 0) return val - discount
    return val
  })
}

console.log(finalPrices(prices))
