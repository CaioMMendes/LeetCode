const nums = [1, 2, 3, 4]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums: number[]) {
  let sum = 0
  return nums.map((num) => {
    sum += num
    return sum
  })
}

console.log(runningSum(nums))
