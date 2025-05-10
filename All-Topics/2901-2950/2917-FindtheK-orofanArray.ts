const nums = [7, 12, 9, 8, 9, 15],
  k = 4

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function (nums: number[], k: number) {
  const map = nums.map((val) => val.toString(2))
  const count: Record<string, number> = {}

  for (let i = 0; i < map.length; i++) {
    const element = map[i]
    for (let j = 0; j < element.length; j++) {
      const index = element.length - 1 - j
      if (element[index] === "1") {
        if (count[j]) {
          count[j]++
        } else {
          count[j] = 1
        }
      } else if (!count[j]) {
        count[j] = 0
      }
    }
  }
  let result = ""
  const values = Object.values(count)
  for (const value of values) {
    if (value >= k) {
      result = "1" + result
    } else {
      result = "0" + result
    }
  }

  return parseInt(result, 2)
}

console.log(findKOr(nums, k))
