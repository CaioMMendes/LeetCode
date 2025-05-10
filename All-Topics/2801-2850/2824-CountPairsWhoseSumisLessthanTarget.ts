const nums = [-1, 1, 2, 3, 1],
  target = 2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums: number[], target: number) {
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) result++
    }
  }
  return result
}

console.log(countPairs(nums, target))
