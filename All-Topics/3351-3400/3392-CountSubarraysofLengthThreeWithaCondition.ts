const nums = [1, 2, 1, 4, 1]

/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function (nums: number[]) {
  let first = nums[0]
  let second = nums[1]
  let third = nums[2]
  let result = 0
  if (first + third === second / 2) {
    result++
  }

  for (let i = 3; i < nums.length; i++) {
    first = second
    second = third
    third = nums[i]

    if (first + third === second / 2) {
      result++
    }
  }

  return result
}

console.log(countSubarrays(nums))
