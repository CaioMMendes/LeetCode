const nums = [-2, -1, -1, 1, 2, 3]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums: number[]) {
  let countPos = 0
  let countNeg = 0

  for (let val of nums) {
    if (val < 0) countNeg++
    if (val > 0) countPos++
  }

  return Math.max(countNeg, countPos)
}

console.log(maximumCount(nums))
