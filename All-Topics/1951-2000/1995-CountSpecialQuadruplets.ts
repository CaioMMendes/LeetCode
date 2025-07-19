const nums = [1, 2, 3, 6]

/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums: number[]) {
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        for (let l = k + 1; l < nums.length; l++) {
          const sum = nums[i] + nums[j] + nums[k]
          if (sum === nums[l]) result++
        }
      }
    }
  }

  return result
}

console.log(countQuadruplets(nums))
