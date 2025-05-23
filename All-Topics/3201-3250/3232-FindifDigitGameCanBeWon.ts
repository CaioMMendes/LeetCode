const nums = [1, 2, 3, 4, 10]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums: number[]) {
  let one = 0
  let two = 0

  for (const val of nums) {
    if (val >= 10) {
      two += val
    } else {
      one += val
    }
  }

  return one !== two
}

console.log(canAliceWin(nums))
