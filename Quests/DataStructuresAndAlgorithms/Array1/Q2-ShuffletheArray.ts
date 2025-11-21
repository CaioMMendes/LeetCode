const nums = [2, 5, 1, 3, 4, 7],
  n = 3

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums: number[], n: number) {
  const result = []

  for (let i = 0; i < nums.length / 2; i++) {
    result.push(nums[i], nums[i + nums.length / 2])
  }

  return result
}

console.log(shuffle(nums, n))
