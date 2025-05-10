const nums = [1, 2, 3, 4]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums: number[]) {
  let hasZero = false
  let hasTwoZeros = false
  const productAll = nums.reduce((acc, cur) => {
    if (cur === 0) {
      if (hasZero) {
        hasTwoZeros = true
      }
      hasZero = true
      return acc
    }
    return (acc = acc * cur)
  }, 1)

  return nums.map((val) => {
    if (hasTwoZeros) return 0
    if (hasZero) {
      if (val === 0) {
        return productAll
      }
      return 0
    }
    if (val === 0) return
    return productAll / val
  })
}

console.log(productExceptSelf(nums))
