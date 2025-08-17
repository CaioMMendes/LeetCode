const nums = [1, 2, -1, -1, -1]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var lastVisitedIntegers = function (nums: number[]) {
  const length = nums.length
  const ans = []
  const seen = []
  let count = 0

  for (let i = 0; i < length; i++) {
    const element = nums[i]
    if (element !== -1) {
      seen.unshift(element)
      count = 0
    } else {
      if (seen?.[count] !== undefined) {
        ans.push(seen[count])
      } else {
        ans.push(-1)
      }
      count++
    }
  }
  return ans
}

console.log(lastVisitedIntegers(nums))
