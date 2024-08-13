const nums = [1, 2, 2, 3, 4]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums: number[]) {
  const set = [...new Set(nums)]
  return set.length !== nums.length
}

console.log(containsDuplicate(nums))
