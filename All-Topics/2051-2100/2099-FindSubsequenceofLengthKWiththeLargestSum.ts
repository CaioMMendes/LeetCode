const nums = [2, 1, 3, 3],
  k = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums: number[], k: number) {
  const result = []
  const sorted = nums.slice().sort((a, b) => b - a)
  const arrayOfNums = sorted.splice(0, k)

  let current = 0
  while (result.length < k) {
    const index = arrayOfNums.indexOf(nums[current])
    if (index !== -1) {
      result.push(nums[current])
      arrayOfNums.splice(index, 1)
    }
    current++
  }

  return result
}

console.log(maxSubsequence(nums, k))
