const nums = [1, 0, 0, 0, 1, 0, 0, 1],
  k = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums: number[], k: number) {
  let last = null

  for (let index = 0; index < nums.length; index++) {
    const val = nums[index]
    if (val === 0) {
      continue
    }
    if (val === 1) {
      if (last === null) {
        last = index
        continue
      }
      if (index - last - 1 < k) {
        return false
      }
      last = index
    }
  }

  return true
}

console.log(kLengthApart(nums, k))
