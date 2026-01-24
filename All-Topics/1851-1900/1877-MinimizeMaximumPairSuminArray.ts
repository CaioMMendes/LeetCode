const nums = [3, 5, 2, 3]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums: number[]) {
  nums.sort((a, b) => b - a)

  let result = []

  for (let i = 0; i < nums.length / 2; i++) {
    result.push(nums[i] + nums[nums.length - i - 1])
  }

  return Math.max(...result)
}

console.log(minPairSum(nums))
