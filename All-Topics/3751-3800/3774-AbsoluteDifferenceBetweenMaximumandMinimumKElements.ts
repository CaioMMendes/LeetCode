const nums = [5, 2, 2, 4],
  k = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function (nums: number[], k: number) {
  const sorted = nums.sort((a, b) => a - b)

  let small = 0
  let large = 0

  for (let i = 0; i < k; i++) {
    small += sorted[i]
  }

  for (let i = sorted.length - 1; i + k > sorted.length - 1; i--) {
    large += sorted[i]
  }

  return Math.abs(large - small)
}

console.log(absDifference(nums, k))
