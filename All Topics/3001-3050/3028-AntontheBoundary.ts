const nums = [3, 2, -3, -4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums: number[]) {
  let result = 0
  let sum = nums[0]
  if (sum === 0) {
    result++
  }
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i]
    if (sum === 0) {
      result++
    }
  }
  return result
}

console.log(returnToBoundaryCount(nums))
