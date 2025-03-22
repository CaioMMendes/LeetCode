const nums = [10, 10, 3, 7, 6]

/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums: number[]) {
  let sumLeft = 0

  let rest = nums.reduce((acc, cur) => acc + cur, 0)
  let result = 0

  for (let i = 0; i < nums.length - 1; i++) {
    sumLeft += nums[i]
    rest -= nums[i]

    if ((rest - sumLeft) % 2 === 0) result++
  }

  return result
}

console.log(countPartitions(nums))
