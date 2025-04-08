const nums = [1, 2, 3, 4, 2, 3, 3, 5, 7]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums: number[]) {
  const repeatNumbers = new Set()
  const count = new Map()

  for (let val of nums) {
    if (count.get(val)) {
      repeatNumbers.add(val)
      count.set(val, count.get(val) + 1)
    } else {
      count.set(val, 1)
    }
  }

  let initialCount = 0
  while (repeatNumbers.size > 0) {
    for (let i = 3 * initialCount; i < (initialCount + 1) * 3; i++) {
      count.set(nums[i], count.get(nums[i]) - 1)
      if (count.get(nums[i]) <= 1) {
        repeatNumbers.delete(nums[i])
      }
    }
    initialCount++
  }

  return initialCount
}

console.log(minimumOperations(nums))
