const nums = [1, 3, 5, 7]

/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function (nums: number[]) {
  return nums.reduce((acc, cur, index) => {
    if (index % 2 === 0) {
      return acc + cur
    }
    return acc - cur
  })
}

console.log(alternatingSum(nums))
