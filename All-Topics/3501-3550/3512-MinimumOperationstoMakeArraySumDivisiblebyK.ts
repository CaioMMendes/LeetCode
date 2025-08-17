const nums = [3, 9, 7],
  k = 5

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums: number[], k: number) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0)

  return sum % k
}

console.log(minOperations(nums, k))
