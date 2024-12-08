const nums = [7, 8, 3, 4, 15, 13, 4, 1]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums: number[]) {
  const averages = []
  while (nums.length > 0) {
    let max = [0, 0]
    let min = [60, 0]

    for (let i = 0; i < nums.length; i++) {
      if (min[0] > nums[i]) {
        min = [nums[i], i]
      }
      if (max[0] < nums[i]) {
        max = [nums[i], i]
      }
      if (max[0] === min[0]) {
        max = [nums[i], i]
      }
    }

    const splicedMin = nums.splice(min[1], 1)
    const splicedMax = nums.splice(max[1] > min[1] ? max[1] - 1 : max[1], 1)
    averages.push((splicedMin[0] + splicedMax[0]) / 2)
  }

  return Math.min(...averages)
}

console.log(minimumAverage(nums))
