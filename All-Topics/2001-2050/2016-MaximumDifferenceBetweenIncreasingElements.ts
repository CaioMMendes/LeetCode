const nums = [7, 1, 5, 4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums: number[]) {
  let diff = -1

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const curDiff = nums[j] - nums[i]
      if (curDiff > diff && curDiff > 0) {
        diff = curDiff
      }
    }
  }
  return diff
}

console.log(maximumDifference(nums))
