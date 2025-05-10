const nums = [5, 2, 3, 1]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums: number[]) {
  let result = 0

  while (!checkSort(nums)) {
    let min = +Infinity
    let indexes = [0, 0]

    for (let i = 1; i < nums.length; i++) {
      const sum = nums[i] + nums[i - 1]
      if (sum < min) {
        min = sum
        indexes = [i - 1, i]
      }
    }

    nums.splice(indexes[0], 2, min)

    result++
  }

  return result

  function checkSort(array: number[]) {
    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
        return false
      }
    }
    return true
  }
}

console.log(minimumPairRemoval(nums))
