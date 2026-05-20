const nums = [2, 3, 1, 1, 4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums: number[]) {
  const visited = new Array(nums.length)
  let result = -1

  jump(nums[0], 0, 0)

  function jump(num: number, current: number, jumps: number) {
    if (current >= nums.length - 1) {
      if (jumps < result || result === -1) result = jumps
      return
    }
    if (result !== -1 && jumps + 1 >= result) return
    if (visited[current] !== undefined && visited[current] <= jumps) return
    visited[current] = jumps
    for (let i = num; i >= 1; i--) {
      jump(nums[current + i], current + i, jumps + 1)
    }
  }

  return result === -1 ? 0 : result
}

console.log(jump(nums))
