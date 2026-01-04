const nums = [21, 4, 7]

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function (nums: number[]) {
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i]
    let count = 0
    let currentSum = 1 + currentNum

    for (let j = 2; j < currentNum; j++) {
      if (currentNum % j === 0) {
        currentSum += j
        count++
      }
      if (count === 2 && j === currentNum - 1) {
        result += currentSum
        break
      }
      if (count > 2) break
    }
  }

  return result
}

console.log(sumFourDivisors(nums))
