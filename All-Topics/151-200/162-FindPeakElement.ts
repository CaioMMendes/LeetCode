const nums = [1]

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums: number[]) {
  const length = nums.length - 1

  if (nums.length === 1) {
    return 0
  }

  if (nums.length <= 2) {
    let result = 0
    nums[0] > nums[1] ? (result = 0) : (result = 1)
    return result
  }

  if (nums[0] > nums[1]) {
    return 0
  }

  if (nums[length] > nums[length - 1]) {
    return length
  }

  for (let index = 1; index < length; index++) {
    const element = nums[index]
    const nextElement = nums[index + 1]
    if (element > nextElement) {
      if (nums[index - 1] < element) {
        return index
      }
    }
  }

  return 0
}

console.log(findPeakElement(nums))
