const nums = [1, 4, 3, 2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums: number[]) {
  const sorted = nums.sort((a, b) => b - a)
  const length = nums.length
  let result = 0
  for (let i = 1; i < length; i += 2) {
    result += sorted[i]
  }

  return result
}

console.log(arrayPairSum(nums))
