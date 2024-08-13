const nums = [1, 3, 2, 1]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums: number[]) {
  return nums.concat(nums)
}

console.log(getConcatenation(nums))
