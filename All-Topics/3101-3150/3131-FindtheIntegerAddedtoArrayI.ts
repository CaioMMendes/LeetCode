const nums1 = [2, 6, 4],
  nums2 = [9, 7, 5]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function (nums1: number[], nums2: number[]) {
  const min1 = Math.min(...nums1)
  const min2 = Math.min(...nums2)

  return min2 - min1
}

console.log(addedInteger(nums1, nums2))
