const nums = [0, 0, 1]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums: number[]) {
  let count = 0
  for (let index = 0; count < nums.length; index++) {
    const element = nums[index]
    if (element === 0) {
      nums.splice(index, 1)
      nums.push(0)
      index -= 1
    }
    count++
  }
}

console.log(moveZeroes(nums))
