const nums = [1, 2, 3, 4]
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums: number[]) {
  let result = 0

  for (let value of nums) {
    result += value % 3 !== 0 ? 1 : 0
  }

  return result
}

console.log(minimumOperations(nums))
