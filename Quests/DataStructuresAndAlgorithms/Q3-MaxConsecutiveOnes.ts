const nums = [1, 1, 0, 1, 1, 1]

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums: number[]) {
  let result = 0

  let count = 0
  for (const val of nums) {
    if (val === 1) {
      count++
    } else {
      count = 0
    }

    if (count > result) result = count
  }

  return result
}

console.log(findMaxConsecutiveOnes(nums))
