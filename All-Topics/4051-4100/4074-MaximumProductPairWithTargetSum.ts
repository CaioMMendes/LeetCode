const nums = [1, 2, 3, 4],
  target = 5

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var maxProductPair = function (nums: number[], target: number) {
  let max = [0, -1]
  let current = -Infinity

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] <= nums[j]) continue

      if (nums[i] + nums[j] === target) {
        if (current < nums[i] * nums[j]) {
          max = [i, j]
          current = nums[i] * nums[j]
        }
      }
    }
  }

  if (max[0] === 0 && max[1] === -1) return [-1, -1]

  return max
}

console.log(maxProductPair(nums, target))
