const nums = [2, 1, 3]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums: number[]) {
  const count: Record<string, number> = {}
  const length = nums.length
  if (nums.length < 2) return false

  for (let i = 0; i < length; i++) {
    if ((count[nums[i]] && nums[i] !== length - 1) || count[nums[i]] > 1) {
      return false
    }
    if (count[nums[i]]) {
      count[nums[i]]++
    } else {
      count[nums[i]] = 1
    }
  }

  let start = 1
  for (let key in count) {
    const numberKey = Number(key)
    if (numberKey === length - 1 && count[key] !== 2) return false
    if (numberKey !== start && numberKey !== length - 1) return false
    start++
  }

  return true
}

console.log(isGood(nums))
