const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
// const nums = [1, 2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums: number[]) {
  const max = Math.max(...nums)

  const length = nums.length - 1
  let sum =
    ((1 + length) * length) / 2 +
    (max > length ? max : 0) +
    (max < length + 1 ? length + 1 : 0)
  console.log(sum)

  nums.forEach((element) => {
    if (element >= 0 && element <= 1 + length) {
      sum -= element
    }
  })

  return sum
}

console.log(missingNumber(nums))
