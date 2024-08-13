const nums = [1, 1, 0, 1, 1, 1]

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums: number[]) {
  let count = 0
  let result = 0
  const numsLength = nums.length
  for (let i = 0; i < numsLength; i++) {
    if (nums[i] === 1) {
      count++
      if (count > result) result = count
    } else {
      count = 0
    }
  }
  return result
}

console.log(findMaxConsecutiveOnes(nums))
