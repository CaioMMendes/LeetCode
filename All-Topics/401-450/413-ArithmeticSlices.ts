const nums = [1, 2, 3, 4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums: number[]) {
  let result = 0

  for (let i = 2; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[j] - nums[j - 1] === nums[j - 1] - nums[j - 2]) {
        result++
      } else {
        break
      }
    }
  }

  return result
}

console.log(numberOfArithmeticSlices(nums))
