const nums = [3, -2, 1, 1]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function (nums: number[]) {
  let result = nums.slice()

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result[i] = nums[(i + nums[i]) % nums.length]
    }

    if (nums[i] === 0) {
      result[i] = nums[i]
    }

    if (nums[i] < 0) {
      let index = (i + nums[i] + nums.length) % nums.length
      if (index < 0) index += nums.length
      result[i] = nums[index]
    }
  }
  return result
}

console.log(constructTransformedArray(nums))
