const nums = [1, 2, 3, 4, 5, 6]

/**
 * @param {number[]} nums
 * @return {number}
 */
var evenNumberBitwiseORs = function (nums: number[]) {
  return nums.reduce((acc, cur) => {
    if (cur % 2 !== 0) return acc
    return acc | cur
  }, 0)
}

console.log(evenNumberBitwiseORs(nums))
