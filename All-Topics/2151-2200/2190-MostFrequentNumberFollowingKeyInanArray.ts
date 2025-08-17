const nums = [1, 100, 200, 1, 100],
  key = 1

/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums: number[], key: number) {
  const count: Record<string, number> = {}

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === key) {
      if (count[nums[i]]) {
        count[nums[i]]++
      } else {
        count[nums[i]] = 1
      }
    }
  }

  let result = [0, 0]

  for (let keys in count) {
    if (count[keys] > result[1]) {
      result = [Number(keys), count[keys]]
    }
  }

  return result[0]
}

console.log(mostFrequent(nums, key))
