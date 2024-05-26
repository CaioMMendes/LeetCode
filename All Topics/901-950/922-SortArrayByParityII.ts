const nums = [4, 2, 5, 7]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums: number[]) {
  let odd = 1
  let even = 0
  const numsLength = nums.length
  const result = Array(numsLength)

  for (let i = 0; i < numsLength; i++) {
    if (nums[i] % 2 === 0) {
      result[even] = nums[i]
      even += 2
    } else {
      result[odd] = nums[i]
      odd += 2
    }
  }

  return result
}

console.log(sortArrayByParityII(nums))
