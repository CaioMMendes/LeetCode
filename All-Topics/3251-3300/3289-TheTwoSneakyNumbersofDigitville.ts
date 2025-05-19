const nums = [0, 1, 1, 0]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums: number[]) {
  const set = new Set()
  const result = []

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) result.push(nums[i])
    set.add(nums[i])
  }

  return result
}

console.log(getSneakyNumbers(nums))
