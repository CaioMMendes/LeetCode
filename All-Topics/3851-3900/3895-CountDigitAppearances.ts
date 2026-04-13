const nums = [12, 54, 32, 22],
  digit = 2

/**
 * @param {number[]} nums
 * @param {number} digit
 * @return {number}
 */
var countDigitOccurrences = function (nums: number[], digit: number) {
  let result = 0
  let stringDigit = String(digit)

  for (const val of nums) {
    const string = String(val)

    for (let i = 0; i < string.length; i++) {
      if (string[i] === stringDigit) result++
    }
  }

  return result
}

console.log(countDigitOccurrences(nums, digit))
