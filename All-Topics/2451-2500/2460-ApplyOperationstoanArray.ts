const nums = [1, 2, 2, 1, 1, 0]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums: number[]) {
  const zeros = []
  const arr = []

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums[i - 1] *= 2
      nums[i] = 0
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeros.push(0)
    } else {
      arr.push(nums[i])
    }
  }

  return arr.concat(zeros)
}

console.log(applyOperations(nums))
