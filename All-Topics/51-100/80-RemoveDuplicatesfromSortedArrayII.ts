const nums = [1, 1, 1, 2, 2, 3]

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums: number[]) {
  for (let i = 2; i > 0; i++) {
    if (nums?.[i] === undefined) break
    if (nums[i] === nums[i - 1] && nums[i - 1] === nums[i - 2]) {
      nums.splice(i, 1)
      i--
    }
  }

  return nums.length
}

console.log(removeDuplicates(nums))
