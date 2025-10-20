const nums = [8, 2, 3, 4, 6],
  k = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function (nums: number[], k: number) {
  const set = new Set(nums)

  for (let i = 1; i > 0; i++) {
    if (!set.has(i * k)) return i * k
  }
}

console.log(missingMultiple(nums, k))
