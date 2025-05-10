const nums = [4, 3, 2, 7, 8, 2, 3, 1]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums: number[]) {
  const set = new Set(nums)

  const length = nums.length
  const result = []
  for (let i = 1; i <= length; i++) {
    if (!set.has(i)) {
      result.push(i)
    }
  }

  return result
}

console.log(findDisappearedNumbers(nums))
