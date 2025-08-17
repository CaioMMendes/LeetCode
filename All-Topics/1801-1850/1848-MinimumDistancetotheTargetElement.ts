const nums = [1, 2, 3, 4, 5],
  target = 5,
  start = 3

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums: number[], target: number, start: number) {
  let result = +Infinity

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target && result > Math.abs(i - start)) {
      result = Math.abs(i - start)
    }
  }

  return result
}

console.log(getMinDistance(nums, target, start))
