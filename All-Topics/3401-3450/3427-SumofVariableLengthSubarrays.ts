const nums = [2, 3, 1]

/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function (nums: number[]) {
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    const start = Math.max(0, i - nums[i])

    for (let j = start; j <= i; j++) {
      result += nums[j]
    }
  }

  return result
}

console.log(subarraySum(nums))
