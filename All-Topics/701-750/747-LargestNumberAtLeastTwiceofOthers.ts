const nums = [1, 2, 3, 4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums: number[]) {
  let large = -1
  let largeIndex = -1
  let secondLarge = -1

  for (let i = 0; i < nums.length; i++) {
    if (large < nums[i]) {
      secondLarge = large
      largeIndex = i
      large = nums[i]
    } else if (secondLarge < nums[i]) {
      secondLarge = nums[i]
    }
  }

  if (large >= 2 * secondLarge) {
    return largeIndex
  }
  return -1
}

console.log(dominantIndex(nums))
