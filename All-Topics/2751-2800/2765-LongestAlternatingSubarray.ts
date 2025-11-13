const nums = [2, 3, 4, 3, 4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function (nums: number[]) {
  let result = -1

  for (let i = 0; i < nums.length; i++) {
    let current = "up"
    let count = 1
    for (let j = i + 1; j < nums.length; j++) {
      if (current === "up" && nums[j] - 1 === nums[j - 1]) {
        count++
        if (count > result) result = count
        current = "down"
        continue
      }

      if (current === "down" && nums[j] + 1 === nums[j - 1]) {
        count++
        if (count > result) result = count
        current = "up"
        continue
      }
      break
    }
  }

  return result
}

console.log(alternatingSubarray(nums))
