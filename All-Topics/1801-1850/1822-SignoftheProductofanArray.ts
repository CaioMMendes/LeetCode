const nums = [-1, -2, -3, -4, 3, 2, 1]

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums: number[]) {
  if (nums.some((val) => val === 0)) return 0

  const reduce = nums.reduce((acc, cur) => {
    return acc * cur
  }, 1)
  return signFunc(reduce)
  function signFunc(x: number) {
    if (x > 0) return 1
    if (x < 0) return -1
    if (x === 0) return 0
  }
}

console.log(arraySign(nums))
