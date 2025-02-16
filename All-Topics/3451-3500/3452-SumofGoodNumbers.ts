const nums = [1, 3, 2, 1, 5, 4],
  k = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function (nums: number[], k: number) {
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > (nums?.[i - k] ?? 0) && nums[i] > (nums?.[i + k] ?? 0)) {
      result += nums[i]
    }
  }

  return result
}

console.log(sumOfGoodNumbers(nums, k))
