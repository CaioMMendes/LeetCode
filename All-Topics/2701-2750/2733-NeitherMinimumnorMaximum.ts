const nums = [3, 2, 1, 4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums: number[]) {
  let max = nums?.[1] >= nums[0] ? nums?.[1] : nums[0]
  let min = nums?.[1] < nums[0] ? nums?.[1] : nums[0]

  if (nums.length <= 2) return -1

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] === max || nums[i] === min) continue
    if (nums[i] > max) return max
    if (nums[i] > min) return nums[i]
    return min
  }

  return -1
}

console.log(findNonMinOrMax(nums))
