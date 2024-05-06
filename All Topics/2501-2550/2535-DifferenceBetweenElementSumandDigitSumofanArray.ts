const nums = [1, 15, 6, 3]

/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums: number[]) {
  let numsSum = 0
  let digitsSum = 0

  for (let number of nums) {
    numsSum += number
    const stringNumber = String(number)
    const stringLength = stringNumber.length

    for (let i = 0; i < stringLength; i++) {
      digitsSum = digitsSum + parseInt(stringNumber[i])
    }
  }
  return Math.abs(numsSum - digitsSum)
}

console.log(differenceOfSum(nums))
