const nums = [0, 1, 4, 6, 7, 10],
  diff = 3

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums: number[], diff: number) {
  const numsLength = nums.length
  let result = 0
  for (let index = 0; index < numsLength - 2; index++) {
    const element = nums[index]
    const nextElement = nums[index + 1]
    if (element + diff >= nextElement) {
      for (let k = index + 1; k < numsLength; k++) {
        const elementK = nums[k]
        const nextElementK = nums[k + 1]

        if (elementK + diff < nextElementK) {
          k = numsLength
        }
        if (element + diff === elementK) {
          for (let j = k + 1; j < numsLength; j++) {
            const elementJ = nums[j]

            if (elementJ - diff === elementK) {
              result++
            }
          }
        }
      }
    }
  }
  return result
}

console.log(arithmeticTriplets(nums, diff))
