const nums = [1, 2, 3]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums: number[]) {
  nums = nums.map((val) => val ** 2).sort((a, b) => b - a)

  const half = Math.floor(nums.length / 2)
  let result = 0

  for (let i = 0; i < half; i++) {
    result += nums[i] - nums[nums.length - 1 - i]
  }

  if (nums.length % 2 !== 0) {
    result += nums[half]
  }

  return result
}

console.log(maxAlternatingSum(nums))
