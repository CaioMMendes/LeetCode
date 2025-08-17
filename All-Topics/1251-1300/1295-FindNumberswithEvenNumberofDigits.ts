const nums = [12, 345, 2, 6, 7896]

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums: number[]) {
  return nums.reduce((acc, cur) => {
    if (String(cur).length % 2 === 0) return acc + 1
    return acc
  }, 0)
}

console.log(findNumbers(nums))
