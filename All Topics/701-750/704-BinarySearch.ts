const nums = [-1, 0, 3, 5, 9, 12, 11],
  target = 50

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums: number[], target: number) {
  let max = nums.length - 1
  let min = 0
  let mid = Math.floor((max + min) / 2)

  while (true) {
    if (nums[mid] === target) return mid

    if (nums[mid] > target) max = mid - 1
    if (nums[mid] < target) min = mid + 1
    mid = Math.floor((max + min) / 2)

    if (max < min) return -1
  }
}

console.log(search(nums, target))
