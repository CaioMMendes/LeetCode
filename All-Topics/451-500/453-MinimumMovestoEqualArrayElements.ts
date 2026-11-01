const nums = [1, 2, 3]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums: number[]) {
  const sort = nums.sort((a, b) => a - b)

  let result = 0

  for (const val of sort) {
    result += val - sort[0]
  }

  return result
}

console.log(minMoves(nums))
