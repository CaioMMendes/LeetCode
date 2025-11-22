const nums = [8, 1, 2, 2, 3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums: number[]) {
  const sorted = [...nums].sort((a, b) => b - a)

  const count = new Map()

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) continue

    count.set(sorted[i - 1], sorted.length - i)
  }

  const result = []

  for (const val of nums) {
    result.push(count.get(val) ?? 0)
  }

  return result
}

console.log(smallerNumbersThanCurrent(nums))
