const nums = [2, 0, 2, 1, 1, 0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums: number[]) {
  nums.sort((a, b) => a - b)
}

console.log(sortColors(nums))
