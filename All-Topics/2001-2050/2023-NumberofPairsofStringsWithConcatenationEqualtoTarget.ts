const nums = ["123", "4", "12", "34"],
  target = "1234"

/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function (nums: string[], target: string) {
  const count: Record<string, number> = {}

  for (const val of nums) {
    if (count[val]) {
      count[val]++
    } else {
      count[val] = 1
    }
  }

  let result = 0

  for (const val of nums) {
    if (!target.startsWith(val)) continue

    const rest = target.slice(val.length, target.length)

    if (rest === val) {
      result += count[rest] - 1
      continue
    }

    if (count[rest]) {
      result += count[rest]
    }
  }

  return result
}

console.log(numOfPairs(nums, target))
