const nums = [-2, -5, -4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums: number[]) {
  let current = 0
  let result = -Infinity

  for (const val of nums) {
    const temp = current + val
    if (temp < val) {
      current = val
    } else {
      current = temp
    }
    if (current > result) result = current
  }

  return result
}

console.log(maxSubArray(nums))
