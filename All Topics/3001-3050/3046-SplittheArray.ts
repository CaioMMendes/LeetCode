const nums = [1, 1, 2, 2, 3, 4]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums: number[]) {
  const count = {}
  const numsLength = nums.length
  let result = 0

  for (let i = 0; i < numsLength; i++) {
    if (count[nums[i]] < 2) {
      count[nums[i]]++
      result++
    } else if (!count[nums[i]]) {
      count[nums[i]] = 1
      result++
    } else {
      count[nums[i]] = 5
    }
  }

  return result >= numsLength
}

console.log(isPossibleToSplit(nums))
