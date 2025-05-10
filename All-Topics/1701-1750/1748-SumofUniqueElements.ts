const nums = [1, 2, 3, 2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums: number[]) {
  const length = nums.length
  const count: Record<string, boolean> = {}
  let result = 0
  for (let i = 0; i < length; i++) {
    const element = nums[i]
    if (count[element] === false) {
      count[element] = true
      result -= element
    } else if (count[element] === undefined) {
      count[element] = false
      result += element
    }
  }
  return result
}

console.log(sumOfUnique(nums))
