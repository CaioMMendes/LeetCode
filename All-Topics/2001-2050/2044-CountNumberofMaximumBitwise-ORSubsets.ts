const nums = [3, 2, 1, 5]

/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums: number[]) {
  let max = 0
  let count = 0

  for (const val of nums) {
    max = max | val
  }

  for (let i = 0; i < nums.length; i++) {
    generateResult(0, i, [])
  }

  function generateResult(currentVal: number, index: number, arr: number[]) {
    if (index >= nums.length) return
    currentVal = currentVal | nums[index]

    if (currentVal === max) {
      // console.log(arr) //Just for debug
      count++
    }
    arr = [...arr, nums[index]]
    for (let i = index; i < nums.length; i++) {
      generateResult(currentVal, i + 1, arr)
    }
  }

  return count
}

console.log(countMaxOrSubsets(nums))
