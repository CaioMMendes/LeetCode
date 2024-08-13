const nums = [13, 25, 83, 77]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums: number[]) {
  return nums
    .flatMap((numb) => {
      return String(numb).split("")
    })
    .map(Number)
}

console.log(separateDigits(nums))
