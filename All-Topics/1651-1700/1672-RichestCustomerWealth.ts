const accounts = [
  [1, 2, 3],
  [3, 2, 1],
]

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts: number[][]) {
  let result = 0
  for (let amount of accounts) {
    const sum = amount.reduce((acc, cur) => acc + cur, 0)
    if (sum > result) {
      result = sum
    }
  }
  return result
}

console.log(maximumWealth(accounts))
