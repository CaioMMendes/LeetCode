const nums = [10, 2, 5, 2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums: number[]) {
  const numsLength = nums.length
  let biggest = nums[0] >= nums[1] ? nums[0] : nums[1]
  let secondBiggest = nums[0] >= nums[1] ? nums[1] : nums[0]

  for (let i = 2; i < numsLength; i++) {
    const number = nums[i]
    if (number >= biggest) {
      secondBiggest = biggest
      biggest = number
    } else if (number > secondBiggest) {
      secondBiggest = number
    }
  }

  return (biggest - 1) * (secondBiggest - 1)
}

console.log(maxProduct(nums))
