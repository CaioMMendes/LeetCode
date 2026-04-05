const nums = [3, 1, -2, -5, 2, -4]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums: number[]) {
  const positive = nums.filter((num) => num >= 0)
  const negative = nums.filter((num) => num < 0)

  const result = []

  for (let i = 0; i < positive.length; i++) {
    result.push(positive[i])
    result.push(negative[i])
  }

  return result
}

console.log(rearrangeArray(nums))
