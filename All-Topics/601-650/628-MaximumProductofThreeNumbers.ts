const nums = [1, 2, 3]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums: number[]) {
  const numsPositive = nums.filter((num) => num >= 0)
  const numsNegative = nums.filter((num) => num < 0)

  const sortedPositive = numsPositive.sort((a, b) => b - a)
  const sortedNegative = numsNegative.sort((a, b) => a - b)

  let max = -Infinity

  if (
    sortedPositive[0] !== undefined &&
    sortedPositive[1] !== undefined &&
    sortedPositive[2] !== undefined
  ) {
    max = Math.max(
      max,
      sortedPositive[0] * sortedPositive[1] * sortedPositive[2],
    )
  }
  if (
    sortedNegative[0] !== undefined &&
    sortedNegative[1] !== undefined &&
    sortedPositive[0] !== undefined
  ) {
    max = Math.max(
      max,
      sortedNegative[0] * sortedNegative[1] * sortedPositive[0],
    )
  }

  if (
    sortedPositive[0] !== undefined &&
    sortedNegative[1] !== undefined &&
    sortedNegative[2] !== undefined
  ) {
    max = Math.max(
      max,
      sortedPositive[0] * sortedNegative[1] * sortedNegative[2],
    )
  }

  if (
    sortedNegative[0] !== undefined &&
    sortedPositive[0] !== undefined &&
    sortedNegative[2] !== undefined
  ) {
    max = Math.max(
      max,
      sortedNegative[0] * sortedPositive[0] * sortedNegative[2],
    )
  }

  if (
    sortedNegative[0] !== undefined &&
    sortedNegative[1] !== undefined &&
    sortedNegative[2] !== undefined
  ) {
    max = Math.max(
      max,
      sortedNegative[sortedNegative.length - 1] *
        sortedNegative[sortedNegative.length - 2] *
        sortedNegative[sortedNegative.length - 3],
    )
  }

  return max
}

console.log(maximumProduct(nums))
