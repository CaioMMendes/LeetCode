const nums = [4, 1, 2, 3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums: number[]) {
  const odds = []
  const even = []
  let oddIndex = 0
  let evenIndex = 0
  const result = []

  const length = nums.length
  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      even.push(nums[i])
    } else {
      odds.push(nums[i])
    }
  }
  odds.sort((a, b) => b - a)
  even.sort((a, b) => a - b)
  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      result.push(even[evenIndex])
      evenIndex++
    } else {
      result.push(odds[oddIndex])
      oddIndex++
    }
  }

  return result
}

console.log(sortEvenOdd(nums))
