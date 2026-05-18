const nums = [2, 5, 6, 0, 0, 1, 2],
  target = 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums: number[], target: number) {
  const set = new Set(nums)

  return set.has(target)
}

console.log(search(nums, target))
