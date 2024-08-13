const nums = [-7, -3, 2, 3, 11]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums: number[]) {
  const squares = nums.map((element) => element ** 2)
  return squares.sort((a, b) => a - b)
}

console.log(sortedSquares(nums))
