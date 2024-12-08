const nums = [1, 2, 3, 4, 5]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums: number[]) {
  const result = []

  for (let i = 0; i < nums.length; i++) {
    const first = new Set(nums.slice(0, i + 1)).size
    const second = new Set(nums.slice(i + 1, nums.length)).size
    result.push(first - second)
  }

  return result
}

console.log(distinctDifferenceArray(nums))
