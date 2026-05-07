const nums = [1, 2, 4, 2, 3, 2]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findValidElements = function (nums: number[]) {
  const leftMax = new Array(nums.length)
  const rightMax = new Array(nums.length)

  for (let i = 0; i < nums.length; i++) {
    leftMax[i] = Math.max(leftMax?.[i - 1] ?? 0, nums[i])
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax?.[i + 1] ?? 0, nums[i])
  }

  const result = []

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i]

    if (
      currentNum > (rightMax?.[i + 1] ?? 0) ||
      currentNum > (leftMax?.[i - 1] ?? 0)
    ) {
      result.push(currentNum)
    }
  }

  return result
}

console.log(findValidElements(nums))
