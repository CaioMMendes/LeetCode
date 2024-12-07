const nums = [1, 2, 3, 4, 5]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function (nums: number[]) {
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) count++
    if (count >= 2) return true
  }
  return false
}

console.log(hasTrailingZeros(nums))
