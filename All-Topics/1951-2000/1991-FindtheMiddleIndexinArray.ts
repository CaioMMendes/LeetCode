const nums = [2, 3, -1, 8, 4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums: number[]) {
  let right = nums.reduce((acc, cur) => acc + cur, 0)
  const length = nums.length
  let left = 0

  for (let i = 0; i < length; i++) {
    right -= nums[i]

    if (i > 0) {
      left += nums[i - 1]
    }

    if (right === left) {
      return i
    }
  }

  return -1
}

console.log(findMiddleIndex(nums))
