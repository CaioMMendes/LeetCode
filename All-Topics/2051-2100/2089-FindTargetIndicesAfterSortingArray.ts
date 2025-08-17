const nums = [1, 2, 5, 2, 3],
  target = 2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums: number[], target: number) {
  const result = []

  const length = nums.length
  nums.sort((a, b) => a - b)
  for (let i = 0; i < length; i++) {
    const element = nums[i]
    if (element > target) {
      return result
    }
    if (element === target) result.push(i)
  }
  return result
}

console.log(targetIndices(nums, target))
