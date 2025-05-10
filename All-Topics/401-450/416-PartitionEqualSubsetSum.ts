const nums = [1, 5, 11, 5]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums: number[]) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0)

  let half = sum / 2

  if (sum % 2 !== 0) return false

  const dp = new Array(half + 1).fill(false)
  dp[0] = true

  for (let num of nums) {
    for (let i = half; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num]
    }
  }

  return dp[half]
}

console.log(canPartition(nums))
