const numOnes = 3,
  numZeros = 2,
  numNegOnes = 0,
  k = 2

/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (
  numOnes: number,
  numZeros: number,
  numNegOnes: number,
  k: number
) {
  if (numOnes >= k) return k
  k -= numOnes
  if (numZeros >= k) return numOnes
  k -= numZeros
  return numOnes - k
}

console.log(kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k))
