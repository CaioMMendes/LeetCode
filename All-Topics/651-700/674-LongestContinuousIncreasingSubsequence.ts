const nums = [1, 3, 5, 4, 7]

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums: number[]) {
  let count = 0
  let current = -Infinity
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i]

    if (currentNum > current) {
      count++
    } else {
      if (count > max) {
        max = count
      }
      count = 1
    }

    current = currentNum
  }
  if (count > max) {
    max = count
  }
  return max
}

console.log(findLengthOfLCIS(nums))
