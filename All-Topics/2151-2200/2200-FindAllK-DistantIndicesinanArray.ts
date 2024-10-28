const nums = [3, 4, 9, 1, 3, 9, 5],
  key = 9,
  k = 1

/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums: number[], key: number, k: number) {
  const keyIndexes = []
  const result = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) keyIndexes.push(i)
  }
  const indexesLength = keyIndexes.length
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < indexesLength; j++) {
      if (Math.abs(i - keyIndexes[j]) <= k) {
        result.push(i)
        break
      }
    }
  }

  return result
}

console.log(findKDistantIndices(nums, key, k))
