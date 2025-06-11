const aliceSizes = [1, 1],
  bobSizes = [2, 2]

/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes: number[], bobSizes: number[]) {
  const aliceSum = aliceSizes.reduce((acc, cur) => acc + cur, 0)
  const bobSum = bobSizes.reduce((acc, cur) => acc + cur, 0)
  const bobSet = new Set(bobSizes)
  const diff = (bobSum - aliceSum) / 2

  for (const val of aliceSizes) {
    if (bobSet.has(diff + val)) return [val, diff + val]
  }
}

console.log(fairCandySwap(aliceSizes, bobSizes))
