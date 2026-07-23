const nums = [1, 2, 3, 4, 5]

/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function (nums: number[]) {
  const str = nums.length.toString(2)

  if (nums.length < 3) return nums.length

  return 2 ** str.length
}

console.log(uniqueXorTriplets(nums))
