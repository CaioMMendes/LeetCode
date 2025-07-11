const nums = [1, 12, -5, -6, 50, 3],
  k = 4

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums: number[], k: number) {
  let max = 0

  for (let i = 0; i < k; i++) {
    max += nums[i]
  }

  let lastCurrent = max

  for (let i = k; i < nums.length; i++) {
    const current = lastCurrent - nums[i - k] + nums[i]
    lastCurrent = current

    if (current > max) max = current
  }

  return max / k
}

console.log(findMaxAverage(nums, k))
