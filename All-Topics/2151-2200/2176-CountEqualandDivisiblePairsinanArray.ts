const nums = [3, 1, 2, 2, 2, 1, 3],
  k = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums: number[], k: number) {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        result++
      }
    }
  }
  return result
}

console.log(countPairs(nums, k))
