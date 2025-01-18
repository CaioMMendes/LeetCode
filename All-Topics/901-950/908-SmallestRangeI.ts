const nums = [1],
  k = 0

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums: number[], k: number) {
  const max = Math.max(...nums)
  const min = Math.min(...nums)
  const math = max - k - (min + k)
  return math < 0 ? 0 : math
}

console.log(smallestRangeI(nums, k))
