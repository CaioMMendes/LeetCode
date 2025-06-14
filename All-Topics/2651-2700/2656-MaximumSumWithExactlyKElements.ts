const nums = [1, 2, 3, 4, 5],
  k = 3

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums: number[], k: number) {
  let max = Math.max(...nums)
  let result = max

  for (let i = 1; i < k; i++) {
    max++
    result += max
  }

  return result
}

console.log(maximizeSum(nums, k))
