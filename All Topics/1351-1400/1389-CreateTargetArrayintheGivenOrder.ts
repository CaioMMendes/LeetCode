const nums = [0, 1, 2, 3, 4],
  index = [0, 1, 2, 2, 1]

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums: number[], index: number[]) {
  const numsLength = nums.length
  const result: number[] = []

  for (let i = 0; i < numsLength; i++) {
    const element = nums[i]
    const indexToSplice = index[i]

    result.splice(indexToSplice, 0, element)
  }
  return result
}

console.log(createTargetArray(nums, index))
