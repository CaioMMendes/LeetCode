const nums = [1, 2, 3],
  k = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums: number[], k: number) {
  const length = nums.length
  let minLength = nums.length + 1
  for (let i = 0; i < length; i++) {
    let subArray = 0
    let current = null
    for (let j = i; j < length; j++) {
      if (current === null) {
        current = nums[i]
        subArray++
        if (current >= k) return 1
      } else {
        current = current | nums[j]
        subArray++
        if (current >= k) {
          if (minLength > subArray) {
            minLength = subArray
          }
          break
        }
      }
    }
  }
  return minLength === nums.length + 1 ? -1 : minLength
}

console.log(minimumSubarrayLength(nums, k))
