const nums = [1, 3, 2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    const sum = String(nums[i])
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0)
    if (sum === i) return i
  }

  return -1
}

console.log(smallestIndex(nums))
