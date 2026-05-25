const nums = [1, 1, 1, 2, 2, 3],
  k = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var limitOccurrences = function (nums: number[], k: number) {
  const count: Record<string, number> = {}
  const result = []

  for (const val of nums) {
    if (count[val] < k || count[val] === undefined) result.push(val)
    if (count[val]) {
      count[val]++
    } else {
      count[val] = 1
    }
  }

  return result
}

console.log(limitOccurrences(nums, k))
