const nums = [1, 2, 2, 3, 1, 4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums: number[]) {
  const count: Record<string, number> = {}

  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]]) {
      count[nums[i]]++
    } else {
      count[nums[i]] = 1
    }
  }

  const values = Object.values(count)
  const max = Math.max(...values)
  return values.reduce((acc, cur) => {
    if (cur !== max) return acc
    return acc + cur
  }, 0)
}

console.log(maxFrequencyElements(nums))
