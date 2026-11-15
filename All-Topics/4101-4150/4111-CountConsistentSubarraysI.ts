const nums = [5, 3, 1, 2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var countConsistent = function (nums: number[]) {
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    let min = nums[i]
    let and = nums[i]

    for (let j = i; j < nums.length; j++) {
      const currentValue = nums[j]
      if (j === i) {
        result++
        continue
      }
      and = and & currentValue
      if (currentValue < min) {
        min = currentValue
      }

      if (and === min) {
        result++
      }
    }
  }

  return result
}

console.log(countConsistent(nums))
