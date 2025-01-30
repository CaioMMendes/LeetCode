const nums = [1, 2, 3, 3]

/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums: number[]) {
  const count: Record<string, number> = {}
  const n = nums.length / 2

  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]]) {
      count[nums[i]]++
    } else {
      count[nums[i]] = 1
    }
    if (count[nums[i]] === n) return nums[i]
  }
}

console.log(repeatedNTimes(nums))
