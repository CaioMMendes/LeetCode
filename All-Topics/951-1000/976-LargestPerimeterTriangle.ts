const nums = [2, 1, 2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums: number[]) {
  nums.sort((a, b) => a - b) // ordenar

  let result = 0

  for (let i = nums.length - 1; i >= 2; i--) {
    const a = nums[i - 2]
    const b = nums[i - 1]
    const c = nums[i]

    if (a + b > c) {
      result = a + b + c
      break
    }
  }

  return result
}

console.log(largestPerimeter(nums))
