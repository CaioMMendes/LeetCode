const nums = [-14, 61, 29, -18, 59, 13, -67, -16, 55, -57, 7, 74]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function (nums: number[]) {
  const max = Math.max(...nums)
  const min = Math.min(...nums)

  const indexMax = nums.indexOf(max)
  const indexMin = nums.indexOf(min)

  let result = 0

  if (indexMax > indexMin) {
    result = indexMax + 1

    const minDiff = nums.length - indexMin
    if (minDiff < result) {
      result = minDiff
    }
    const sum = indexMin + 1 + (nums.length - indexMax)

    if (sum < result) result = sum
  } else {
    result = indexMin + 1

    const maxDiff = nums.length - indexMax
    if (maxDiff < result) {
      result = maxDiff
    }

    const sum = indexMax + 1 + (nums.length - indexMin)

    if (sum < result) result = sum
  }

  return result
}

console.log(minimumDeletions(nums))
