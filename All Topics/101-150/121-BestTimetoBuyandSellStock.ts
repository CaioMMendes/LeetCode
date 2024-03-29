const prices = [7, 6, 4, 3, 1];

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices: number[]) => {
  let min = prices[0];
  let result = 0;

  for (let index = 0; index < prices.length; index++) {
    const element = prices[index];
    const difference = element - min;
    if (difference < 0) {
      min = element;
    } else {
      if (difference > result) {
        result = difference;
      }
    }
  }

  return result;
};

console.log(maxProfit(prices));
