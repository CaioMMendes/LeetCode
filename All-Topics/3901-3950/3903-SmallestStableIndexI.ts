const nums = [5, 0, 1, 4],
  k = 3

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums: number[], k: number) {
  for (let i = 0; i < nums.length; i++) {
    const first = nums.slice(0, i)
    const second = nums.slice(i, nums.length)
    first.push(nums[i])

    const max = Math.max(...first)
    const min = Math.min(...second)

    if (max - min <= k) return i
  }
  return -1
}

console.log(firstStableIndex(nums, k))
