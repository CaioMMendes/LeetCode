const nums = [1, 3, 2],
  k = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function (nums: number[], k: number) {
  const max = Math.max(...nums)
  const min = Math.min(...nums)

  return (max - min) * k
}

console.log(maxTotalValue(nums, k))
