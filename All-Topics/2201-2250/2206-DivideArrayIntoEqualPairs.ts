const nums = [3, 2, 3, 2, 2, 2]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums: number[]) {
  const count: Record<string, number> = {}

  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]]) {
      count[nums[i]]++
    } else {
      count[nums[i]] = 1
    }
  }

  for (const key in count) {
    if (count[key] % 2 !== 0) {
      return false
    }
  }

  return true
}

console.log(divideArray(nums))
