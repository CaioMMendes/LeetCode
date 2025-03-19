const nums = [3, 9, 2, 1, 7],
  k = 3

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function (nums: number[], k: number) {
  const count: Record<string, number> = {}

  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]]) {
      count[nums[i]]++
    } else {
      count[nums[i]] = 1
    }
  }

  if (k === 1) {
    let max = -1
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > max && count[nums[i]] === 1) {
        max = nums[i]
      }
    }
    return max
  }

  if (k === nums.length) {
    return Math.max(...nums)
  }

  let max = -1

  if (count[nums[0]] === 1 && nums[0] > max) {
    max = nums[0]
  }

  if (count[nums[nums.length - 1]] === 1 && nums[nums.length - 1] > max) {
    max = nums[nums.length - 1]
  }
  return max
}

console.log(largestInteger(nums, k))
