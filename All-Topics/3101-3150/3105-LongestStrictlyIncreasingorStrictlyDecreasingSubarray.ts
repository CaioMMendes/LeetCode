const nums = [1, 4, 3, 3, 2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums: number[]) {
  let result = 1
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]
    let count = 1
    let increasing: boolean | null = null
    for (let j = i + 1; j < nums.length; j++) {
      if (increasing === null) {
        if (nums[j] > element) {
          increasing = true
        } else if (nums[j] < element) {
          increasing = false
        }
      }
      if (nums[j] > nums[j - 1] && increasing === true) {
        count++
        continue
      }
      if (nums[j] < nums[j - 1] && increasing === false) {
        count++
        continue
      }
      break
    }
    if (count > result) result = count
  }
  return result
}

console.log(longestMonotonicSubarray(nums))
