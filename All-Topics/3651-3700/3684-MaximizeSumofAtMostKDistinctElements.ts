const nums = [84, 93, 100, 77, 90],
  k = 3

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function (nums: number[], k: number) {
  const set = new Set(nums)
  const uniques = [...set].sort((a, b) => b - a)

  return uniques.slice(0, k)
}

console.log(maxKDistinct(nums, k))
