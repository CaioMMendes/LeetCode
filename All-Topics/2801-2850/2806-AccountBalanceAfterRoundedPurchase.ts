const purchaseAmount = 9

/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function (purchaseAmount: number) {
  const val = purchaseAmount % 10

  if (val < 5) {
    purchaseAmount -= val
  } else {
    purchaseAmount = purchaseAmount - val + 10
  }

  return 100 - purchaseAmount
}

console.log(accountBalanceAfterPurchase(purchaseAmount))
