const nums = [2, 1, 3, 5, 6],
  k = 5,
  multiplier = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums: number[], k: number, multiplier: number) {
  while (k > 0) {
    const min = Math.min(...nums)
    const index = nums.indexOf(min)

    nums[index] *= multiplier

    k--
  }
  return nums
}

console.log(getFinalState(nums, k, multiplier))
