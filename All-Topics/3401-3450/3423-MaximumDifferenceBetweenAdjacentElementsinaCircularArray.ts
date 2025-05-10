const nums = [1, 2, 4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums: number[]) {
  let max = Math.abs(nums[0] - nums[nums.length - 1])

  for (let i = 1; i < nums.length; i++) {
    const math = Math.abs(nums[i] - nums[i - 1])
    if (math > max) {
      max = math
    }
  }

  return max
}

console.log(maxAdjacentDistance(nums))
