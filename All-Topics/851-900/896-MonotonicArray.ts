const nums = [1, 2, 2, 3]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums: number[]) {
  let increasing = null

  for (let i = 1; i < nums.length; i++) {
    if (increasing === null) {
      if (nums[i] > nums[i - 1]) {
        increasing = true
      }
      if (nums[i] < nums[i - 1]) {
        increasing = false
      }
      continue
    }
    if (increasing === true && nums[i] < nums[i - 1]) {
      return false
    } else if (increasing === false && nums[i] > nums[i - 1]) {
      return false
    }
  }

  return true
}

console.log(isMonotonic(nums))
