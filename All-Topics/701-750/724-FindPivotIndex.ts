const nums = [1, 7, 3, 6, 5, 6]

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums: number[]) {
  let rightSum = nums.reduce((acc, cur) => acc + cur, 0)
  let current = 0
  let leftSum = 0

  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i]
    current = nums[i]
    if (rightSum === leftSum) return i
    leftSum += current
  }

  return -1
}

console.log(pivotIndex(nums))
