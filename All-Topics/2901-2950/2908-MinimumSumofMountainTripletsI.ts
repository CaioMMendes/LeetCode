const nums = [8, 6, 1, 5, 3]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums: number[]) {
  let result = +Infinity

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k]
        if (nums[i] < nums[j] && nums[k] < nums[j] && result > sum) {
          result = sum
        }
      }
    }
  }

  return result === +Infinity ? -1 : result
}

console.log(minimumSum(nums))
