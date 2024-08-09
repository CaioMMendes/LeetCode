const nums = [5, 4, 2, 3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums: number[]) {
  const sortedNums = nums.sort((a, b) => a - b)
  const numsLength = nums.length
  const result: number[] = []
  for (let i = 0; i < numsLength; i += 2) {
    result.push(sortedNums[i + 1], sortedNums[i])
  }
  return result
}

console.log(numberGame(nums))
