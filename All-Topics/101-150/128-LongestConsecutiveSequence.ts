const nums = [100, 4, 200, 1, 3, 2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums: number[]) {
  const set = new Set(nums)
  let result = 0

  for (let num of set) {
    if (!set.has(num - 1)) {
      let count = 1
      let currentNumber = num

      while (set.has(currentNumber + 1)) {
        currentNumber++
        count++
      }

      if (result < count) {
        result = count
      }
    }
  }
  return result
}

console.log(longestConsecutive(nums))
