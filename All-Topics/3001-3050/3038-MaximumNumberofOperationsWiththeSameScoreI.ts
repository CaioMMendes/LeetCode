const nums = [3, 2, 1, 4, 5]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function (nums: number[]) {
  const firstSum = nums[0] + nums[1]
  let count = 1

  for (let i = 3; i < nums.length; i += 2) {
    const sum = nums[i] + nums[i - 1]
    if (sum !== firstSum) return count
    count++
  }
  return count
}

console.log(maxOperations(nums))
