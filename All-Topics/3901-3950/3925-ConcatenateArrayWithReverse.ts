const nums = [1, 2, 3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function (nums: number[]) {
  const reversed = nums.slice().reverse()

  return nums.concat(reversed)
}

console.log(concatWithReverse(nums))
