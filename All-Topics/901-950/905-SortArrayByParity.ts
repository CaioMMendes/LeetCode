const nums = [3, 1, 2, 4]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums: number[]) {
  const numsLength = nums.length
  const result: number[] = []

  for (let i = 0; i < numsLength; i++) {
    if (nums[i] % 2 === 0) {
      result.unshift(nums[i])
    } else {
      result.push(nums[i])
    }
  }
  return result
}

console.log(sortArrayByParity(nums))
