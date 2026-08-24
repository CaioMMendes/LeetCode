const nums = [4, 3, 2, 6]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums: number[]) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0)
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    result += nums[i] * i
  }

  let max = result

  for (let i = nums.length - 1; i > 0; i--) {
    result += sum - nums.length * nums[i]
    if (result > max) max = result
  }

  return max
}

console.log(maxRotateFunction(nums))
