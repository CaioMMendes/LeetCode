const nums = [1, 2, 3, 4]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums: number[]) {
  const numsLength = nums.length
  let result: number[] = []

  for (let i = 0; i < numsLength; i += 2) {
    const array = Array(nums[i]).fill(nums[i + 1])
    result.push(...array)
  }
  return result
}

console.log(decompressRLElist(nums))
