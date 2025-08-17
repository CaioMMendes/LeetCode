const nums = [3, 4, 5, 1, 2]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums: number[]) {
  const length = nums.length
  let indexBreak = 0
  for (let i = 1; i < length; i++) {
    if (nums[i] < nums[i - 1]) {
      indexBreak = i
    }
  }

  const spliced = nums.splice(0, indexBreak)
  nums.push(...spliced)

  for (let i = 1; i < length; i++) {
    if (nums[i] < nums[i - 1]) {
      return false
    }
  }
  return true
}

console.log(check(nums))
