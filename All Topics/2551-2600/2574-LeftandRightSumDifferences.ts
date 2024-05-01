const nums = [10, 4, 8, 3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums: number[]) {
  const result: number[] = []
  const sum = nums.reduce((acc, cur) => acc + cur, 0)
  const numsLength = nums.length - 1
  let leftSum = 0
  let rightSum = sum

  for (let index = 0; index <= numsLength; index++) {
    const element = nums[index]

    rightSum -= element
    console.log(rightSum, leftSum)

    result.push(Math.abs(leftSum - rightSum))
    leftSum += element
  }
  return result
}

console.log(leftRightDifference(nums))
