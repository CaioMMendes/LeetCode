const nums = [-4, -2, 1, 4, 8]

type differenceType = {
  value?: number
  difference?: number
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums: number[]) {
  const difference: differenceType = {
    value: undefined,
    difference: undefined,
  }

  for (let i = 0; i < nums.length; i++) {
    const abs = Math.abs(nums[i])

    if (
      difference.value === undefined ||
      abs < (difference.difference ?? 0) ||
      (abs === difference.difference && nums[i] > difference.value)
    ) {
      difference.value = nums[i]
      difference.difference = abs
    }
  }
  return difference.value
}

console.log(findClosestNumber(nums))
