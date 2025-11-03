const nums = [1, 4, 2, 5]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums: number[]) {
  let small = nums[0]
  let big = nums[0]
  const set = new Set()

  for (const val of nums) {
    if (small > val) small = val
    if (big < val) big = val
    set.add(val)
  }

  const result = []

  for (let i = small; i <= big; i++) {
    if (set.has(i)) continue
    result.push(i)
  }

  return result
}

console.log(findMissingElements(nums))
