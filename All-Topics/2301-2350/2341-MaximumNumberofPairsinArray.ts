const nums = [1, 3, 2, 1, 3, 2, 2]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums: number[]) {
  const count: Record<string, number> = {}

  for (const val of nums) {
    if (count[val]) {
      count[val]++
    } else {
      count[val] = 1
    }
  }

  const result = [0, 0]

  for (const key in count) {
    result[0] += Math.floor(count[key] / 2)
    result[1] += count[key] % 2
  }

  return result
}

console.log(numberOfPairs(nums))
