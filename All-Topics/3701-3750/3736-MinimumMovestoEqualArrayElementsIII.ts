const nums = [2, 1, 3]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums: number[]) {
  const max = Math.max(...nums)

  return nums.reduce((acc, cur) => acc + (max - cur), 0) ?? 0
}

console.log(minMoves(nums))
