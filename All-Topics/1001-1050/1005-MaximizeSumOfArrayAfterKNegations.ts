const nums = [4, 2, 3],
  k = 1

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums: number[], k: number) {
  const positive = []
  const negative = []
  let result = 0

  for (const val of nums) {
    if (val >= 0) {
      positive.push(val)
    } else {
      negative.push(val)
    }
    result += val
  }

  let min = Math.min(...positive)

  negative.sort((a, b) => a - b)

  for (const val of negative) {
    if (k <= 0) break
    const abs = Math.abs(val)
    result += abs * 2
    if (min > abs) min = abs
    k--
  }

  if (k % 2 === 0) return result

  return result - min * 2
}

console.log(largestSumAfterKNegations(nums, k))
