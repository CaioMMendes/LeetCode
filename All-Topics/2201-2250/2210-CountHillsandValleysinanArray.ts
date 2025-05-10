const nums = [2, 4, 1, 1, 6, 5]

/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums: number[]) {
  let current: number | null = null
  const filtered = nums.filter((val) => {
    if (current === val) {
      return false
    }
    current = val
    return true
  })

  let result = 0
  for (let i = 0; i < filtered.length; i++) {
    if (filtered[i] > filtered[i - 1] && filtered[i] > filtered[i + 1]) result++
    if (filtered[i] < filtered[i - 1] && filtered[i] < filtered[i + 1]) result++
  }
  return result
}

console.log(countHillValley(nums))
