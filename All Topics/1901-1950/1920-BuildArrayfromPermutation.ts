const nums = [0, 2, 1, 5, 3, 4]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums: number[]) {
  return nums.map((_, index) => nums[nums[index]])
}

console.log(buildArray(nums))
