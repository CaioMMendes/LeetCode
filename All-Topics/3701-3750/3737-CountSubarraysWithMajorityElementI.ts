const nums = [1, 2, 2, 3],
  target = 2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function (nums: number[], target: number) {
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    let count = 0
    let size = 0

    for (let j = i; j < nums.length; j++) {
      size++
      if (nums[j] === target) count++

      if (count > size / 2) result++
    }
  }

  return result
}

console.log(countMajoritySubarrays(nums, target))
