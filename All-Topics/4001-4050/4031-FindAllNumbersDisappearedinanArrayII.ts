const nums = [3, 9, 7],
  lower = 1,
  upper = 12

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findDisappearedNumbers = function (
  nums: number[],
  lower: number,
  upper: number,
) {
  const result = []
  const check = new Set(nums)

  let currentInterval: number[] = []

  for (let i = lower; i <= upper; i++) {
    if (!check.has(i)) {
      if (currentInterval.length > 0) {
        currentInterval[1] = i
      } else {
        currentInterval = [i]
      }
    } else if (currentInterval.length > 0) {
      result.push(
        currentInterval.length === 1
          ? [currentInterval[0], currentInterval[0]]
          : currentInterval,
      )
      currentInterval = []
    }
  }

  if (currentInterval.length > 0) {
    result.push(
      currentInterval.length === 1
        ? [currentInterval[0], currentInterval[0]]
        : currentInterval,
    )
  }

  return result
}

console.log(findDisappearedNumbers(nums, lower, upper))
