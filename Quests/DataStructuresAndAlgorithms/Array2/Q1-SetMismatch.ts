const nums = [1, 2, 2, 4]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums: number[]) {
  const count: Record<string, boolean> = {}
  const result = []

  for (const val of nums) {
    if (count[val]) {
      result[0] = val
    } else {
      count[val] = true
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!count[i]) result[1] = i
  }

  return result
}

console.log(findErrorNums(nums))
