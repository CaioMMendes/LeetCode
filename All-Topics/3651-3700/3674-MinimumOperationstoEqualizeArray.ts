const nums = [1, 2, 142, 5454, 3553, 7767, 9, 123, 5543]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums: number[]) {
  return new Set(nums).size === 1 ? 0 : 1
}

console.log(minOperations(nums))
