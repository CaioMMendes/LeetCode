const nums = [5, 3, 6, 1, 12],
  original = 3

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums: number[], original: number) {
  const obj: Record<string, boolean> = {}

  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i].toString()]) {
      obj[nums[i].toString()] = true
    }
  }

  while (true) {
    if (obj[original]) {
      original *= 2
      continue
    }
    return original
  }
}

console.log(findFinalValue(nums, original))
