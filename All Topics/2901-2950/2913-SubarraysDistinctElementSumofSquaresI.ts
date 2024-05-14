const nums = [1, 2, 1]

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function (nums: number[]) {
  let sum = 0
  const numsLength = nums.length

  for (let i = 0; i < numsLength; i++) {
    const unique = new Set()
    for (let j = i; j < numsLength; j++) {
      unique.add(nums[j])

      sum += unique.size ** 2
    }
  }
  return sum
}

console.log(sumCounts(nums))
