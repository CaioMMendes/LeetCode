const nums = [2, 11, 10, 1, 3],
  k = 10

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums: number[], k: number) {
  const sortedNums = nums.sort((a, b) => a - b)
  let result = 0
  while (sortedNums[0] < k) {
    sortedNums.shift()
    result++
  }
  return result
}

console.log(minOperations(nums, k))
