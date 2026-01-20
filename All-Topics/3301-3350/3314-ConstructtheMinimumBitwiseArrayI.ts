const nums = [2, 3, 5, 7]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function (nums: number[]) {
  return nums.map((num) => {
    if (num % 2 === 0) return -1

    let count = 0
    while (count <= num) {
      if ((count | (count + 1)) === num) {
        return count
      }
      count++
    }
  })
}

console.log(minBitwiseArray(nums))
