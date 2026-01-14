const nums = [1, 2, 3, 12]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums: number[]) {
  let min = nums[1] > nums[2] ? nums[2] : nums[1]
  let second = nums[1] > nums[2] ? nums[1] : nums[2]

  for (let i = 3; i < nums.length; i++) {
    const element = nums[i]

    if (element <= min) {
      second = min
      min = element
    } else if (element < second) {
      second = element
    }
  }

  return nums[0] + min + second
}

console.log(minimumCost(nums))
