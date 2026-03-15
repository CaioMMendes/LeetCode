const nums = [3, 4, 2, 5, 4, 6]

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function (nums: number[]) {
  const count: Record<string, number> = {}

  for (const val of nums) {
    if (count[val]) {
      count[val]++
    } else {
      count[val] = 1
    }
  }

  for (const val of nums) {
    if (val % 2 === 0 && count[val] === 1) return val
  }

  return -1
}

console.log(firstUniqueEven(nums))
