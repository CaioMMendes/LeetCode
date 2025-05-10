const nums = [10, 20, 30, 5, 10, 50]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums: number[]) {
  let max = 0
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > (nums?.[i - 1] ?? 0)) {
      sum += nums[i]
      if (sum > max) max = sum
    } else {
      sum = nums[i]
    }
  }
  return max
}

console.log(maxAscendingSum(nums))
