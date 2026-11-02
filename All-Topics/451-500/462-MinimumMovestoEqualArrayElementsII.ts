const nums = [1, 2, 3]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums: number[]) {
  nums.sort((a, b) => a - b)

  const target = nums[Math.floor(nums.length / 2)]

  let result = 0

  for (const val of nums) {
    result += Math.abs(val - target)
  }

  return result
}

console.log(minMoves2(nums))
