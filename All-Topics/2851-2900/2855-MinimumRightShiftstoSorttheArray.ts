const nums = [3, 4, 5, 1, 2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function (nums: number[]) {
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    let error = false

    for (let j = 1; j < nums.length; j++) {
      if (nums[j] < nums[j - 1]) {
        error = true
        break
      }
    }

    if (error) {
      result++
      const last = nums.pop()!
      nums.unshift(last)

      continue
    }
    return result
  }

  return -1
}

console.log(minimumRightShifts(nums))
