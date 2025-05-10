const nums = [2, 1, 4]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums: number[]) {
  const length = nums.length

  for (let i = 1; i < length; i++) {
    const num1 = nums[i] % 2 === 0
    const num2 = nums[i - 1] % 2 === 0
    if (num1 === num2) return false
  }

  return true
}

console.log(isArraySpecial(nums))
