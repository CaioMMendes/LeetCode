const nums = [1, 3, 5, 2, 4, 8, 2, 2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums: number[]) {
  while (nums.length > 1) {
    const half = nums.length / 2
    const newNums = []
    for (let i = 0; i < half; i++) {
      if (i % 2 === 0) {
        newNums.push(Math.min(nums[i * 2], nums[i * 2 + 1]))
      } else {
        newNums.push(Math.max(nums[i * 2], nums[i * 2 + 1]))
      }
    }
    nums = newNums
  }
  return nums[0]
}

console.log(minMaxGame(nums))
