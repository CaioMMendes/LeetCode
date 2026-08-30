const nums = [3, 3, 1, 2, 2, 1]

/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialIntegers = function (nums: number[]) {
  let result = 0

  const special: Record<string, boolean> = {}

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums?.[i - 1]) continue
    const current = nums[i]
    if (special?.[current] === undefined) {
      special[current] = true
    } else if (special[current]) {
      special[current] = false
    }
  }

  for (const key in special) {
    if (special[key]) result++
  }

  return result
}

console.log(countSpecialIntegers(nums))
