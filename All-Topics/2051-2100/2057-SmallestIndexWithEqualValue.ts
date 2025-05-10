const nums = [0, 1, 2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function (nums: number[]) {
  const length = nums.length
  for (let i = 0; i < length; i++) {
    if (i % 10 === nums[i] % 10) {
      return i
    }
  }
  return -1
}

console.log(smallestEqual(nums))
