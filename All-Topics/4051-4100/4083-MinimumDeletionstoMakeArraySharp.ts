const nums = [1, 1, 2, 2, 2, 3]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletions = function (nums: number[]) {
  let result = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      result++
    }
  }

  return result
}

console.log(minDeletions(nums))
