const nums = [3, 2, 1, 5, 4],
  k = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums: number[], k: number) {
  const numsLength = nums.length
  let result = 0

  for (let i = 0; i < numsLength; i++) {
    const element = nums[i]

    for (let j = i + 1; j < numsLength; j++) {
      const elementJ = nums[j]
      if (i < j && Math.abs(element - elementJ) === k) {
        result++
        console.log(element, elementJ)
      }
    }
  }

  return result
}

console.log(countKDifference(nums, k))
