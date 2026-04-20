const nums = [5, 0, 1, 4],
  k = 3

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums: number[], k: number) {
  let max = nums[0]
  let minList = new Array(nums.length)

  let min = nums[nums.length - 1]

  for (let i = nums.length - 1; i >= 0; i--) {
    if (min > nums[i]) min = nums[i]
    minList[i] = min
  }

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    if (max < cur) max = cur

    if (max - minList[i] <= k) return i
  }
  return -1
}

console.log(firstStableIndex(nums, k))
