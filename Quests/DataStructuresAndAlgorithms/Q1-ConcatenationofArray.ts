const nums = [1, 2, 1]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums: number[]) {
  return [...nums, ...nums]
}

console.log(getConcatenation(nums))
