const nums = [1, 3, 2, 2, 5, 2, 3, 7]

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums: number[]) {
  let result = 0
  const count: Record<string, number> = {}

  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]]) {
      count[nums[i]]++
    } else {
      count[nums[i]] = 1
    }
  }

  const keys: string[] = Object.keys(count)

  keys.sort((a, b) => Number(a) - Number(b))

  for (let i = 1; i < keys.length; i++) {
    if (Math.abs(Number(keys[i]) - Number(keys[i - 1])) === 1) {
      const sum = count[keys[i]] + count[keys[i - 1]]
      if (sum > result) result = sum
    }
  }

  return result
}

console.log(findLHS(nums))
