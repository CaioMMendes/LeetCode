const nums = [13, 4, 5, 6]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums: number[]) {
  let count = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      if (
        nums?.[i + 1] &&
        nums[i - 2] > nums[i] &&
        nums?.[i + 1] < nums[i - 1] &&
        i !== 1
      ) {
        return false
      }
      count++
    }
    if (count > 1) return false
  }
  return true
}

console.log(checkPossibility(nums))
