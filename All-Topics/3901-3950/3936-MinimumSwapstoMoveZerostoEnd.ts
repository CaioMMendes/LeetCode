const nums = [0, 1, 0, 3, 12]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSwaps = function (nums: number[]) {
  let numberOfZeros = 0
  let result = 0

  for (const val of nums) {
    if (val === 0) numberOfZeros++
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 && i < nums.length - numberOfZeros) result++
  }

  return result
}

console.log(minimumSwaps(nums))
