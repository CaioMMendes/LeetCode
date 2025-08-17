const nums = [-3, 2, -3, 4, 2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums: number[]) {
  const values = [nums[0]]

  for (let i = 1; i < nums.length; i++) {
    values.push(nums[i] + values[i - 1])
  }

  const min = Math.min(...values)

  if (min >= 0) return 1
  return Math.abs(min) + 1
}

console.log(minStartValue(nums))
