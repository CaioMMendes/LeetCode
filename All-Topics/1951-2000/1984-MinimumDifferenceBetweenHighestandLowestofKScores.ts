const nums = [90],
  k = 1

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums: number[], k: number) {
  nums.sort((a, b) => a - b)

  let min = 0
  let max = 0
  let result = null
  for (let i = k; i <= nums.length; i++) {
    min = nums[i - k]
    max = nums[i - 1]
    const diff = max - min
    if (result === null) result = diff
    if (result > diff) result = diff
  }

  return result
}

console.log(minimumDifference(nums, k))
