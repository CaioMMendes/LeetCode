//@ts-nocheck

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums
}

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  const indexes = []

  for (let i = 0; i < this.nums.length; i++) {
    if (this.nums[i] === target) {
      indexes.push(i)
    }
  }

  const n = Math.floor(Math.random() * indexes.length)

  return indexes[n]
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
