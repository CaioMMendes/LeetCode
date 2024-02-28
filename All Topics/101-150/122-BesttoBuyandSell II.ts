const prices = [7, 1, 5, 3, 6, 4];

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices: number[]) {
  let result = 0;
  for (let i = 1; prices.length > i; i++) {
    const priceI = prices[i];
    const priceBefore = prices[i - 1];

    if (priceI > priceBefore) {
      result += priceI - priceBefore;
    }
  }
  return result;
};

console.log(maxProfit(prices));
