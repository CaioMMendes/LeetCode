const nums = [1, 1, 1]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums: number[]) {
  let result = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      const math = 1 + nums[i - 1] - nums[i]
      result += math
      nums[i] = math + nums[i]
    }
  }

  return result
}

console.log(minOperations(nums))
