const nums = [2, 1, 3, 4],
  k = 1

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums: number[], k: number) {
  let xor = nums[0]

  for (let i = 1; i < nums.length; i++) {
    xor ^= nums[i]
  }

  let binnaryXor = xor.toString(2)
  let binnaryK = k.toString(2)

  const max =
    binnaryK.length > binnaryXor.length ? binnaryK.length : binnaryXor.length
  binnaryXor = binnaryXor.padStart(max, "0")
  binnaryK = binnaryK.padStart(max, "0")

  let result = 0

  for (let i = 0; i < max; i++) {
    if (binnaryXor[i] !== binnaryK[i]) result++
  }

  return result
}

console.log(minOperations(nums, k))
