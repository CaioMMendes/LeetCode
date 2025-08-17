const nums = [1, 2, 3, 2, 5]

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums: number[]) {
  const set = new Set()

  for (const val of nums) {
    set.add(val)
  }

  let sum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - 1 === nums[i - 1]) {
      sum += nums[i]
    } else {
      break
    }
  }

  while (set.has(sum)) {
    sum++
  }

  return sum
}

console.log(missingInteger(nums))
