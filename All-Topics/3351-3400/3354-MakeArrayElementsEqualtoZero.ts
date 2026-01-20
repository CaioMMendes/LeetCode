const nums = [1, 0, 2, 0, 3]

/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function (nums: number[]) {
  let left = 0
  let right = nums.reduce((acc, cur) => acc + cur, 0)
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    const diff = Math.abs(right - left)

    if (nums[i] === 0) {
      if (diff === 0) {
        result += 2
      } else if (diff === 1) {
        result++
      }
    }

    right -= nums[i]
    left += nums[i]
  }

  return result
}

console.log(countValidSelections(nums))
