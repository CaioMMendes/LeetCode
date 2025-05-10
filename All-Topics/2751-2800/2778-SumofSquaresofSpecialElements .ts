const nums = [1, 2, 3, 4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums: number[]) {
  const length = nums.length
  return nums.reduce((acc, cur, i) => {
    if (length % (i + 1) === 0) {
      return acc + cur ** 2
    }
    return acc
  }, 0)
}

console.log(sumOfSquares(nums))
