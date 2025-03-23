const nums = [3, -2, 1, 4],
  l = 2,
  r = 3

/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function (nums: number[], l: number, r: number) {
  let min = +Infinity

  for (let i = 0; i < nums.length; i++) {
    let count = 0
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      count++
      if (count >= l && count <= r && sum > 0 && sum < min) {
        min = sum
      }

      if (count > r) break
    }
  }

  return min === +Infinity ? -1 : min
}

console.log(minimumSumSubarray(nums, l, r))
