const nums = [1, 2, 3, 4, 5]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums: number[]) {
  const length = nums.length
  let max = 0
  for (let i = 0; i < length; i++) {
    const firstElement = nums[i]
    for (let j = i; j < length; j++) {
      const secondElement = nums[j]
      const modules = Math.abs(firstElement - secondElement)
      if (modules > Math.min(firstElement, secondElement)) continue
      const xor = firstElement ^ secondElement
      if (xor > max) {
        max = xor
      }
    }
  }
  return max
}

console.log(maximumStrongPairXor(nums))
