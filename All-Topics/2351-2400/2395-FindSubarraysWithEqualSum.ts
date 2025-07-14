const nums = [4, 2, 4]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums: number[]) {
  let current = nums[0] + nums[1]
  let set = new Set([current])

  for (let i = 2; i < nums.length; i++) {
    current = nums[i] + nums[i - 1]
    if (set.has(current)) return true
    set.add(current)
  }

  return false
}

console.log(findSubarrays(nums))
