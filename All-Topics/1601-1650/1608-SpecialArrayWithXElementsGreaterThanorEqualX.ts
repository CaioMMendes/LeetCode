const nums = [3, 5]

/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums: number[]) {
  let x = nums.length

  while (x > 0) {
    let count = 0
    for (let i = 0; i <= nums.length; i++) {
      if (x <= nums[i]) {
        count++
      }
    }
    if (count === x) return x
    x--
  }

  return -1
}

console.log(specialArray(nums))
