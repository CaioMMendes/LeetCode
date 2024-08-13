const nums = [4, 2, 5, 9, 7, 4, 8]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums: number[]) {
  const sorted = nums.sort((a, b) => a - b)
  const sortedLength = sorted.length

  return (
    sorted[sortedLength - 1] * sorted[sortedLength - 2] - sorted[0] * sorted[1]
  )
}

console.log(maxProductDifference(nums))
