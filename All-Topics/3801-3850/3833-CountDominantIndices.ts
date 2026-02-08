const nums = [5, 4, 3]

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndices = function (nums: number[]) {
  const total = nums.reduce((acc, cur) => acc + cur, 0)
  let currentSum = 0
  let result = 0

  for (let i = 0; i < nums.length - 1; i++) {
    const currentVal = nums[i]
    currentSum += currentVal
    const avg = (total - currentSum) / (nums.length - 1 - i)
    if (currentVal > avg) result++
  }

  return result
}

console.log(dominantIndices(nums))
