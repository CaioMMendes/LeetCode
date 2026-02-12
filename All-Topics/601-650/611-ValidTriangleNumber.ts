const nums = [2, 2, 3, 4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums: number[]) {
  nums.sort((a, b) => a - b)
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (canMakeTriangle(nums[i], nums[j], nums[k])) result++
      }
    }
  }

  return result

  function canMakeTriangle(a: number, b: number, c: number) {
    return a + b > c
  }
}

console.log(triangleNumber(nums))
