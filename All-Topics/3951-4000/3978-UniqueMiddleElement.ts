const nums = [1, 2, 2]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMiddleElementUnique = function (nums: number[]) {
  const middleIndex = Math.floor(nums.length / 2)

  for (let i = 0; i < nums.length; i++) {
    if (i === middleIndex) continue
    if (nums[i] === nums[middleIndex]) return false
  }

  return true
}

console.log(isMiddleElementUnique(nums))
