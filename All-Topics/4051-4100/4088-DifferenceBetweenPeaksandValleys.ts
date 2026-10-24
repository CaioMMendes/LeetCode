const nums = [1, 5, 2, 4, 1, 3, 0]

/**
 * @param {number[]} nums
 * @return {number}
 */
var peakValleyDifference = function (nums: number[]) {
  let peaks = 0
  let valleys = 0

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      peaks += nums[i]
    } else if (nums[i] < nums[i - 1] && nums[i] < nums[i + 1]) {
      valleys += nums[i]
    }
  }

  return peaks - valleys
}

console.log(peakValleyDifference(nums))
