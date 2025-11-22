const nums = [4, 3, 2, 7, 8, 2, 3, 1]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums: number[]) {
  const result = []
  const set = new Set(nums)

  for (let i = 1; i <= nums.length; i++) {
    if (set.has(i)) continue
    result.push(i)
  }

  return result
}

console.log(findDisappearedNumbers(nums))
