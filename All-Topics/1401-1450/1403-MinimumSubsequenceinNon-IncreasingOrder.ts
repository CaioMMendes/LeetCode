const nums = [4, 3, 10, 9, 8]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums: number[]) {
  let total = nums.reduce((acc, cur) => acc + cur, 0)
  const sorted = nums.sort((a, b) => b - a)
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    total -= nums[i]
    sum += nums[i]

    if (sum > total) {
      return nums.slice(0, i + 1)
    }
  }

  return []
}

console.log(minSubsequence(nums))
