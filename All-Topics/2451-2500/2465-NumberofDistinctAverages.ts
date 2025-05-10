const nums = [4, 1, 4, 0, 3, 5]

/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums: number[]) {
  const result = new Set()
  nums.sort((a, b) => a - b)

  while (nums.length > 0) {
    const minVal = nums.shift() as number
    const maxVal = nums.pop() as number

    const average = (minVal + maxVal) / 2
    result.add(average)
  }

  return result.size
}

console.log(distinctAverages(nums))
