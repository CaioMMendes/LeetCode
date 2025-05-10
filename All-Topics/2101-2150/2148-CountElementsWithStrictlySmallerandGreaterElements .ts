const nums = [11, 7, 2, 15]

/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums: number[]) {
  const count: Record<string, number> = {}

  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]]) {
      count[nums[i]]++
    } else {
      count[nums[i]] = 1
    }
  }

  const keys = Object.keys(count).map(Number)

  const result =
    nums.length -
    count[String(Math.max(...keys))] -
    count[String(Math.min(...keys))]
  return result <= 0 ? 0 : result
}

console.log(countElements(nums))
