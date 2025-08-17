const nums = [1, 3, 6, 10, 12, 15]

/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums: number[]) {
  let sum = 0
  let count = 0

  for (let val of nums) {
    if (val % 3 === 0 && val % 2 === 0) {
      sum += val
      count++
    }
  }
  if (count === 0) return 0

  return Math.floor(sum / count)
}

console.log(averageValue(nums))
